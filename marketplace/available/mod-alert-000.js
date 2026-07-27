// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0JCZO5fmBY5T3yz56WOJgBk9+UBLa3TbFmkWL/vVkGRvVPjO4UUtvGEFjNVO+rr08CvQ3OR8rwj9Xs1kJ3UD97P9WsZDg9vVzjRYV+OYz0GnfjQ9iT7fFW4gakSlhWjuwvBzFSQDqRcQfhE6HwvcEWM8f+00JR5hee8v8oy1J65vaLofdSdF7w+OywmSFOP9agcMob0szmFNon6KOjqziT7gxXL15xGT+osPIELXVXBec9b6DtA7CqpF87rLBwhhteT4rGvkIMTIebnBE3csn5D/y5DsNboVnCl8C+con8KoaLqeWgoN7WGjFgs8eyisqcON7b+m4MKJmvhqgpuYw9ZHGjTA/f4EdCdnuYEnIav6AZEkvkj0MfV6DrQ6LKNBr+afOiULo8BdLxsJ1iB/rvwThGX7qBwIQRjnJ12jWvSDd+nBU97X6CDCBrnQxxhPK08XxJrgiDTFu8rcoQ0Ac72YV2WcWGoMqp9BbG+7QFgPZSMcevhMgY13zl6TCzowy6eDDqnDgC+0AkzItUAb3DBaQXKZgwd3FKbdfuluJtScjmnBxOhgE7bnInV9KA9G9qL0KdPqpQ64ITpWO+r3wgOY6rmkON56+cmKt1IsA8jpg4shMWSx9lSfVYpj/dOtCD+W2V3p1ac9ptYW8FUP09jdIFO/xk8WvlOAM/NL+572BStjrKqnIAc2xG/jIDEeHIEXb7Ssr9Tv8Psriv43/dB3d0gq4C8gsJZTTSbp0dEsr3THLzv6ISZE/xfdzmfvHf2tieyoYSvfOhDW9hQo6sB89fd98t9/On/x554PYZFYBsfI9GAPezgUCWTKOuu+KUnUjNIZqh77mN6jhscsO/n63SW1zyG4CYnjbCbdWX930QeYNfRW8NugHGMsqP+XpucDCPx9++J4T2B+KYEoSAJhio+xGUQ8h/CEWsXA/3LdxjoJDP2qXIb/akvQgHZhO9cTnrYZLaAmD8QMaTE6lMhLvZHhNQTk+OwPaPbg+Tb+Yer+DqBdxdBYhbnFTFVuSMsPzpW8TD0nSxngEMxVeFgMTzi7vTEAO33eD5bs7xFrcZGCOWsrOYnH6lOhl0JSNtkuKzAZDDWDl0f2XwLAOHtTKnT1kVdoHCeQnwB3gRBVbQwXHb95y8+b//A9BboQTN7ghbbSpYwa2mKRzVBIgtia3xmfQV6Ind2Klgd/23/oFoOVnKXh0fNPQLPpHsTtWQ4iAi7UGpSACdXmhU/YISuQxrz18pR6quKqMeWjQOI057+NCHhalr1RuvElvG6Uhm1Z4DsagMkCs4Eqg0BUc84Up1aJQgH5N5aI2F8vYn8S1+3Zeyhb/eft2EI8M+vVsR7eUlJfGTeL9O7DyIT7BvxSFfQ==';const _IH='195c564f4a1f3d708550ac3fc8f3d5511eabff416ec6d105c03b20685febe946';let _src;

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
