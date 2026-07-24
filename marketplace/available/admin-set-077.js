// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSw1cLTiJIHCg1ivLJM1P82U7RCDnq+Lv5shYNp4DaAVufR+1uX4KPYS7Gg5vIF2W4s9zErNkHlo+CEiihZjtzF9/C1qYjSJ550/Q610dBdTTmwbVqitwKaSxhlUrR3V9Im7ppqi6vNDPNv8kOVkgjEHXQ4iYoW8NFs5kg2M+LGq7fWG9lO6z+KwXja+yfUd5c97pis2k48anJeBk6oCgd1wpc6vKbFPWqRYFhFkZ/DiD5I2BrwnSe+fkeVBgaWIobkcoRGFvEci46+GefXYdJqVqMdF/QBOmy8CvtKfzP53OK6RVd5T8xMoKlgeCnEqaRf21v8aI5lvoi+aNf7vnYpu5oGXCpM6zzdSQET7/ubA5Od5ZEeXen2mPHH8AclilrIomVLjUXv8jDdLMyXxZXAK6Ogvb77amc1JJ1oqJMACpwLLISwUjON7Vo14jx54gknDsaatCbFtapXIwk5hTSgmHRpyd7l3PwqD/y2HlWIrfJJo7vy5ameF5LLrC6/zHh2ZnAfOJVuCXuvyGL4PMaViN1S3qlD6CE9NdrUDmiV/arACAU0jL2Udx9vOSXHlF5eJiz7SKQ1BigZKPAfSg6s5Ui+wnkltNuTyxoT4pA/N6dG2HJebdi4WKsY3fuFDJz5lVz55T+r2Xf7J40QyqLMI3DtwP2+c4aMTTw9tWas+GN/eE1WMv7VU/ZDyu/TsODClEKgUVMpzqjxeUHLebWgdZSjg8+TqadsMPC/ScQTxiZq25Ng7CO5QPM8z6tWGPyhStXDoZcXHZWtCudPjxEavJaYf/zG7KQHyLhkASNfyrsfcNmgcQkmUTjDqBSUYR+TEGwUtgf1IEEk9EJOI4U7/czvXNBZ9INvn/EEqGFXrEyvZEuZ/Zllat6zutJBWksXL9deI+UH1J3YczxbyT6qzVUNSme6OW3sIWwzG1WYUf1KmGJRG0MYmivDRHds5cSUPc01aX/vLI7WADae6AbcBiQy6EcJAog=';const _IH='b87b19551ce6047da094cee78c09cc589109cdd0286e86f69e2c3bfc11260786';let _src;

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
