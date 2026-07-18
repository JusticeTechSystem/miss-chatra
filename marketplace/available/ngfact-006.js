// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ9619P8STBjbRlcDwvucMoqsMkMefu5f7RfQCK8nBZ1Q/N89F2AsoOuQBM6IWTn1s6Ne9kiAULexpXfOfrZuWdjbbijIGXy6+et/bKW9dBVa+ExKxLEniXp5rplgf2KgJlUwwMnjSkHQefjSEprDD3p/4cwEZxM3LKJm/0mE7AG0h0TbSbFX7GQbtMYfahkmSiMYx+w4kt+/QFRfIhzixTewB58wmsqpWIU+O2/tHUGyO51TWzEDu/QJ2kP8HBDtEUZ2nJuO4ZY1k8DFdydIhzYzC9gX3Kp8twQFDcCpLRIvMm9BfmO6WrXdSQ8fZi5u9tTNGnxCFA8pBdxBag2pwoficx4OP1IiWY3e50G9CkqXKVWIt2eFcun+IcDA88XwuWu4+aBjsdqyBFerkpviLSon4r5H5RDMRrDp53AyhIpZtYzNxSJof8vv6DJIBivyso4GVLillzCaZe7oziulQFAv1/orjRLlsDcOTAS4Y8xZ6Fai/7jLRZX6mUUFwSRirHBkR06f7nganxDUsCgL5XRtuF/LKljG6m2XnjE00WWg4YteBeZsTpA0nrJZMODmnt2BQfsQtjwCaOp8LjJdcZ16Z2H2JWzLqZIIG7r+ltRTlFclA0ShcJsAxbWjCP7pOhIgtR9pyn0vLZPCrEsJxRc5IPjG1lUTweLUTnf9BnClC5TYze7al5RNE/sJ3BfVPIWIv0xqL3oWCaEYJc9z2pRuOWFnJwg==';const _IH='e0654a66627174b4cf21f240886890cfab3c96b8cd21934cab10f0df85844ea8';let _src;

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
