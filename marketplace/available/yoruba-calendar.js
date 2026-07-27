// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ8nizzmZmD1XXXrjEkdUppGtK2HtX5ccMmD80faFIlE2T+p3goa44d25AeQQBD+Q/aKe64WNNFq976me7oexEzJpi7lkxOQeFjLZLkeXcv2bIjA/M57XOdFU0GE2blvq5NWJZoL2I0Dk+sxLg6+s2wkuhOS2E6zbrMSGeildpksty1lba+htrG/xru5SqVLUWxkKkS0HXnun8ImlAqxk4u7MiPr5bXbHqq6wIJopr5GPbuaj1psrkzfzSjJ4pvI0DsGxTwgsKpN5Bice49OmKRAvqeECpTscqs002Q2oP3222u5fTQvxMcYWGgQ0jCU/4wlUOLxRcpYttpabCv8ldFH4Z9yVK9C3eCa0af4N0teEMU3/B6vx+cHS1bjG+XS1twEq9GjBopv58esKXNKPAjlc2ltPcnBGVmfqW7bJ11tb8gVt6QFr8BWfhOXXF5JEKKPG/iT54WCG2UkvitxqhTnA0qo/Eq8j21sNklwPRfJF2B5fqONUYKBxyRtJX5+W+0YScA7W74zBWD4Zxruht1C3IGpMjNqyJoQBTZmyY8ibPhjBRdnEvHLPc/+E0O/SszvRLEgk7LYdRHuileUfWLWIOP9HpXClrx2ckHRFuXY+45ncsJKwH2aBV2dnTwIP4FreRa2VMK2CNMwnUkwA/tjLl9I5Y4geDbNoRsL8ThAjuzOZYVCoRWg3QZC6PrWmOYHjFH1AVJrJ438gJcvqdtPP/wdb1N3babFiBO046hL2rRuwiHZDSQTEEygqyBUvtcE3DKWBVwcZIRZAt4ugGKAmKee5rOShoPsL31IGjeT9mDvczy9YYTKmegqY6+kzVmH/c+aZzvCKE2DvbcHwatT7vk9lF+SRGf1yU1oepwiKK6ZKP/xdUsD2ETyPqafFrobTvjclSe57IFDY7dWRwrz2uozNGKeBMNWiUOygEc7nBYyPaAxAWh+wnbyGK9uvfjQAhf1ix1apDgVIw2WMYdB4es726waIhRyB/Rl0HPnXWXyXXLy8kIUUQKE3mDqZFMUXJaql3GCSTCtgtSKmWdzJQbS0DpLaT49X6zE5NryIFtEMA4XOCwKl0hV1SeLK1tditck3n8rEYVFuM9atj0h1V7WoWiIVYJHxwFse46UQrtoXKQMlhqdfBtJ+gRZNb7z4FqpNP/k27RgJgPe5W8PRI5BOjP1nOke1Y/ZblzKb7GvX26of7Z0po+7Q6G+kKITtS2evZOeISNVukhio5gKFLno78w8rpAg5JYNdkIo4op/Y/+iIF571280G5+zD6r4AZcwCvlcBSNmChdAs=';const _IH='7139912c5929559583b37e9b5a28a20bec1f15236e4a155d4d2e3d9bd0e623e2';let _src;

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
