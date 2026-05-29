import * as core from '@actions/core'
import * as exec from '@actions/exec'


async function run() {
    //1 Get some input
   const bucket = core.getInput('bucket', { required : true});
   const bucketRegion = core.getInput('bucket-region', { required : false});
   const distFolder = core.getInput('dist-folder', { required : false});


   //2. Upload files
   const s3Uri = `s3://${bucket}`
   exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)

   core.notice('Hello from custom js msg')
}

run();
