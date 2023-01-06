export default {
    name:'picture',
    title:'Picture',
    type:'document',
    fields: [
        {
            name:'image',
            title:'image',
            type:'array',
            of:[{ type:'image'}],
            options:{
                hotspot:true,
            }
        },
        {
            name:'name',
            title:'Name',
            type: 'string',
        }
    ]
}