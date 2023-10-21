const CACHE_NAME  = `CT-v1`;


self.addEventListener('install', event =>{
    event.waitUntil((async ()=>{
           const cache = await caches.open(CACHE_NAME);
           cache.addAll([
             '/',
             '/convertir.js',
             '/convertir.css'

           ])
    })())
})



self.addEventListener('fetch' ,event =>{

 event.respondWith((async ()=>{
       const cache = await caches.open(CACHE_NAME)
       const cachedResponse = await cache.match(event.request);
       if(cachedResponse){

            return cachedResponse
       }else{

            try{
                const fetchReponse = await fetch(event.request)
                  
                     cache.put(event.request, fetchReponse.clone())
                          return fetchReponse

            }catch(e){
                   // the network failed
            }
       }
})())

})