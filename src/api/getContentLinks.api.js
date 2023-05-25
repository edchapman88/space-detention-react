import {S3} from "aws-sdk"

const s3 = new S3({
    region: 'eu-west-1',
    apiVersion: 'latest',
    credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    }})

export default async function getAllContentLinks() {
    // return an array of relative paths
    // (relative to the root of the bucket)
    let items = await s3.listObjects({
        Bucket: 'space-detention-resources'
    }).promise()
    return items.Contents.map(el => el.Key)
}

