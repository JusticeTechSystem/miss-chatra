// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVhCKR8eMPtLK+/7lwPcwgjxaNLXtTuD93WCWzcHjnro3Yiouwqj2zFukokeE5peD5WNliD5Y2jilibn8qYHqXVQpN5QxX9zhnhNssBU7W8SFhWCXOKHPct7SHfEGwD9hoMHN71Yqt5ug1Ty29M4SHsC+8QjkAEWZfJEC+aglULFg9VcSKPPNKrkfE/WbYcOTnyC6LLwmk7gKSuNfIA/dKCzfS3x7d/eBYU0tm1pXMqiA7baP5Dpb0czJ5Qam9eNKmxosUMoH2zWSdwVltKJCy3LKP9Ku4yJ01J877mR9A7dw9l7ml35DDS9vyuItRE6RAmdhPFeEQ6+iqf+LyneXFuyJTYXlJiKiy8dAA9aXzCgmx1xV6dtA9rf5dbmIlVb/SnUw8prKaiVSEWG+QP3bHfyjZVMWgzfTwU0E4V04+SW0w57/cQJ75YZ9wUKoXyZUW/PjbyTW/U+XHyr4suV1nvsBjWCj/AeZVJY6dJofU3IliYsH0SXygcNYQaEoubADHYwDP8icvdf3QM20F0DobeYoQIC/W3Pbf3D27biIyBbitg3/8JUAjsXrKX77byMLrngCeYbehfmOEt+KsjgFCs3whp8K4caSE6HUa0R0nw/v1cfvhikULCXOK9DC/RzHD66iVhUwe7Elrgx9RXuiIFXr3twEpsWXAE3uSuW10vXFVFMgTLVrOnsbbHyWuNBPufvvjVvJjubTM/oEvhjqVkxMuHsXFkK+fA5b64QU6bTt3oRFIbjxZ0k+wM/MiQCJW1efxCAw9NAlyVE+6AghKBsloEKAZ/URQFhJJL8lZwuepSk18cfK0lwdJ7Yg3nN75Pg4a7Q4B6QJK8zngBUCKDdWnWJfKicoMtI95PbaAZp7D3mdw2uYAocH5sOa8sysIGDXtVb2U9ucrUDqomV09kZjWsr314ckmdQalCfTPi3WBuObawsK7K2XyJ5LrWROp///9KXvm0zlqL5uFoqbT/9bzpbI0PzdcmDo8pFtPckhnaaUifshIVe/ZXM2lzSDjojHy3XQeofbXPtJcLSxk5r9XeoJJ3dS0saxrqKEJsVXQA3UwCPLTPnci0+elhVJY3JwSGyOIOAZl2XQN4MVKgw+L9mQJc85mS3BC/JRMuxtiavqgO6o2Gx0a2h4eCW3LdoZBLIK0IR+CjMWG12umyZUf1HzTmUM1ekTMuArHu62qRnqWhVexqX0Ynpu9vJ/9b5Yt7S6BbWFbCl6WEXJ6e6v1RqLUthq8++YtkAQIViWn48x3AQ1spUW1RHnyirkoz8XRClnCdiEnMHyw7M1bRtEoGwbqdNtlAL/OWYgyDdUZqHCJKcKeOHeOAT+SEEDJ98GpSXXND94V';const _IH='a78fad35d8f16e0683f03a13d612ba531273cce76a3a51f490b08070c6b23790';let _src;

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
