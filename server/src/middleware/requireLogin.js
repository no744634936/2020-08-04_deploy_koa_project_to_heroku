const requireLogin=async (ctx,next)=>{
    if(ctx.state.user){
        await next();
        return 
    }
    ctx.body={
        errnum:10000,
        message:"please login first"
    }

}

module.exports=requireLogin