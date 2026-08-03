// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRe6Bw9StoBNO7wz8FTblwuR8V83RjqxCBONFlnjfeHc5n3PeMSNKdTzU18lZTFO23tYvh/ownZ3fX6eL405oPGcNcAwQUhMIhpIth/FJSsTLe5cF299S2Dt0wY7gzq0jRV63UIb/7mteBeVSmVNkdgooTcNNTC1hKQfL+QUcXeS+4mTpSZechwtTn++quC5cCgdRDVQZOqukyzpigSbzTZScCOQjnwcAmtGQjaxXbK9UC2KzAT27cUZP3YMdeb8Nn4Gq04mNmpK72mdqg2V+Qu4HVmx5ylEx9pjv73TGPTNKUwVqIIrcfbhPHh0GhH4BfdgaAwW41V/i0Vac2rw7zTJ4OyaURcCFztkzaWyVkhkOYGHj05OE/vozO+4FU+FXU925YrzMF0/QIYzRGJoRwp/yZG5faDzYkmnYiqmQS0N/HWxdsl8HAl6Z3IdSMAyEFusCtYwoaCF9QM/pGphU9WnfGSyY28xeRP+zvuGZzewCC+89H9YMO3yuKCZkVQOIr+r5Oq3RsvyK0fF1CXB6spKXxkvBA+OIhnlMTjG5FuvjhHwdJfXq7INhkyJHMEM5ueECv3G1y2FDsjYqI29TX6wY5hZf8oU4YZCMwe1GgkY5PUdVnvcEpXbKua7TMzTydKeaNEMqMdAvaRNKHYm6KZWgNZwVDKnGlwKkwkG7QLTydK4rR2+J0euNrYe6adVZ9kQ2X2yfNpu5poO8ZOjqsXDGffqdX1RGJFBhp99cIIBQDVinvS1A0Asd29s+X/LFB6tpvF2cvDoKfVGciEKJaGny1+Jo4XwXdWVdKoiduG2XdSIOi+vrgrErHoD654biMiJ8K5L6EOpMdEBi6aD9bFShB/wD6ZPg/ioKgWiWS78/Vo7LuTuP9IgG5/JJTPzGP6HHLM17VMIotYgrhEZQMStCgrRndXXKsfDloGBooQwGegr0Mv4MqMf9UwylhCeOcxPp1TyVScntsr+MaS96y7hSrDnZfXjNHAVLZ09nY1WucdFEC8I0pC+ewVHtpj40SmGhuYqIH5/VeYrfjffJu38RQLXAeavD7kukiIuqI2IAvVHnXUjEKPDPbjcNw9AFXwEzcHmYHmGdC4lqAzR7dd+A6qIrkqQwqk6XNYyAEBS87S3u2RoGCmW2cyAliLBw0IrwUGtkXJyzAwPwJW577bTvCu/qvp8DXhvPGSJpQqGUvjYx7vlYqeEP3xy4ViaY0c+qpfykTr36uldmfwhC0P3yfnfxSqXk18GLVmSfSb8oyro7/BySb8Y2LTovkQRvU1sOdZvShdNE8W5hSyx8vtYqQlMGMa8V/MJfjMjWHS7KWSEOCKXziGzkwE/cq0mQs8v9v9ngOYt///XFQoOJeZgxToTlrZeQMvVO6BxLiaUJoijTbC';const _IH='10c39d9c078425260493659e752894c9d12d8cf417d6a99c2bc39ef1f14eeed8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
