/** @type {import('next').NextConfig} */
const nextConfig = {
    

        eslint:{
          ignoreDuringBuilds:true
        },
      
       
      
        /* config options here */
        images: {remotePatterns:[
          {
            protocol :"https",
            hostname : "cdn.sanity.io",
            pathname: "**",
          },
        ]}
};

export default nextConfig;
