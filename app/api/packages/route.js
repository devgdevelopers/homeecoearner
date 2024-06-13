
import { clientPromise } from '../../../dbConfig/dbConfig';
import { ObjectId } from 'mongodb';

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db('homeeco');

    try {
        const { title, content, shortDesc, img, features } = await req.json();

        const result = await db.collection('packages').insertOne({ title, content, shortDesc, img, features });
        return new Response(JSON.stringify(result.insertedId), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function GET(req) {
    const client = await clientPromise;
    const db = client.db('homeeco');
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const post = await db.collection('packages').findOne({ _id: new ObjectId(id) });
            if (post) {
                return new Response(JSON.stringify(post), { status: 200 });
            } else {
                return new Response(JSON.stringify({ error: 'Product post not found' }), { status: 404 });
            }
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
    } else {
        try {
            const posts = await db.collection('packages').find({}).toArray();
            const count = await db.collection('packages').countDocuments();
            return new Response(JSON.stringify({ status: 200, data: posts, count }), { status: 200 });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
    }
}

export async function DELETE(req) {
    const client = await clientPromise;
    const db = client.db('homeeco');
    const ProductId = new URL(req.url).searchParams.get('id');

    try {
        const result = await db.collection('packages').deleteOne({ _id: new ObjectId(ProductId) });
        return new Response(JSON.stringify({ deletedId: ProductId }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function PUT(req) {
    const client = await clientPromise;
    const db = client.db('homeeco');
    const ProductId = new URL(req.url).searchParams.get('id');
    let bodyObject = await req.json();

    try {
        const result = await db.collection('packages').updateOne({ _id: new ObjectId(ProductId) }, { $set: bodyObject });
        return new Response(JSON.stringify({ updatedId: ProductId }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

