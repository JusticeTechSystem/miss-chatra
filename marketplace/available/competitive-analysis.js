// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ugXzA0Vv1v+SM2mZlhyFlNWes/ZoARfREpfpG1MYjvndTrcpmUxQvqmtGPzo1ZNUDGIQiSy278PI6KIpOLJrCvY+Mkg0L39HhGU1GmLQfUfTNj2fIV5EkN2ivChaNxGtF/tRWSutYPTxtxozJVDh/9RiWqH2TYLgdl1iC+P4L6v4foXaT+fbqQPixQNyBSxJ6yJcNnQwnkDvN7fM47TUxSQWNF+RA+l48HA6O8yC4qfb2DmBITO6W31M14AX0yMX2q3kdG0mD0WsHSh9ybR6UlXnDn/bdzn+fH4RtclRYoF/8z6Luhw1rmEDS/ioZEK9xhnVImv35TFihLpiF4MDVR8OnyxvMKW7qWWQIcqojsVdtVA+JASsJhur36vjIWDqdnxyO/4hGZfG4Cce9K8SNXRG3O3e5rUezJKhKamozFpliu9dJ+A9emHyxDJxdP04mAQol2b/bgOCHXSIykvD8HciVqJMSq3LxAMpQK/teelJYoFWfmelGkZ9BD3MZ8ftDZEjGO+YovDKkW6YovzZchwSx4q8WNdgJEM098CK6FX2sSU+DlcwvebfpXBnbiM/sVsA9Ea5QXC+nkNCd0l/Rfzc+rUq4WnZtHUbdaKSKRGPoaavNP9j3eYmDMCWdMfeebc6tlIOD8UNkOiUYyJHVFZFH3IjV7ByN2VojckrYg8OULePXtDAaLtMW5pH89lYS2UQEnMMNpKOqXRI1HQAfKPTCrdcINHLa1+jmELUUpExS7AzMD8LdiyduKeKYFJ136qVJSsIlw4UTczirsdEnymQcK664FhMbvO9hQQW0jyTsA50G18wHiEgc9l/BK9NbQAgn3FnaTdAp03kkVJCUz7umzkI3PYePXcXD+z/w+xWmyh/WUzS3Z12/bdeMP9UphD9FLGdGiYONnNZZ2VicG+1d+VLPZPN4EDc0Xcxhp5gvphZKaU5aFQIX+UTF5lyQ7Ke2RpuvQtkvn8qPp92n2wHEwxojdC22L2X7t8TgQ6kOqrYMS4bRmvZTaidnT98PlOaySRzPCoSK97ITWVtxenh3wuQfsEhQirFpSl8qSinjDSm8fwvOHsYKJY9cPXFo6xlOzs2iVWgG9KybYnPIUdFTGl9Ngx5px+QgZtRnAlFvzkrKjtyyanIDN1JWldZ+hcyC1gG/1OkHjzXflUlUV4jRrrcHy6NQJttoxlKyGmyAJBtitGt52+WYFtfQbM7nKmGBWu9Ka0lmCOJby5bh05JUs4T9qtTJC5jlrxIF/5xEXR1Rlmcjp2CMZ+9rdCNKRhmkpEHVULy323SKw0Ld7JQ+zgb3ZZBNQeh5Q3cSK8Fw5WaVO9IwtqWMgEeiqjS8TZ7BSg53rcm1E0/5MX1kagsA41jAY9IG9vwI/0hucat2u2vaS/u+F7W3Z/vWv/KIwv0fInN2kq9teNKweU2aXOkVCItelW04u7ytYhtK7WT8Vk9fpqp/gBP7DL4je1pN8afG4HNgszXZCn8F+AoOZC3qNTNzlskwSH6/1Vkgtl3au3waXoRJjiikAHm30TKuj/otBhBPmEfj2/VkOOOEqNlQuAufOviBD0cMcV6ZtHE/WvU78R3KC4xmqt86cwSU0V1Qxl7iBfLNyQkv4ph+UE6pNbinT3GTT/w9LxLsUt1/ZRrRJRjoi4ssdS0jnDfIcCkwUQU4JT766WSMt7xZDCioOUPc4qeM6MwJy9X16kbB9V6BZiM6QDTeDl7LxYrW/pliREMYyIxYvcPf+ERc/uFVqWji54lr9HiWfrHuk9wwd87V/KIGg==';const _IH='712259f12d885a435cbc9a3c948e6bde02eac4572f135b628e64061e1cfb6e1e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
