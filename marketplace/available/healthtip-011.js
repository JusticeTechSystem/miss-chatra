// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7Q3iPZmgCYHwVgvUk9q32EHq1xxAWpcX69pvH5GNk0OQFry4U1Kj5XkBpj3KKwUi528vr+VSlnC50+tXSqA2TidBv6QcxGgXpELRESbP1XUrLxPoYWnMVfgkjeGYE3Hu17dc2W/AGXqsTJExKCQqi0ybBb0gJRXt3xYa4brntsaO/oczAAhOvFCUmkxbUglzz84ZwWB9PgXURR/5ZFtGXFm1R9ovfOxiOpn3JlJNS1DHpFQQV2g7l22f1AtYq+juRTNsI0svqIW8HyPgGpsHdLt7iBNcDNRKVDgmVjreLtyfNM1TwE1OlnHvg24huU9MASVLcEYhf7xrYQ07mSyD9f0usfkDDr70B29JhrfFrUcED3G6Xh7OYldspyoCgsjAanOo4KZMcDq+RZHeaADrzdG/4FlxCgErgSGuuwQGlP7Gtazx3LSTunAbF5MOhJlLXpkhrIEXA0rd0bQJ7zlN4JSwE5PrKLMKkO7jGB5zkaE7l96eJe2LOpl/63GWRByDBOq0uU7rv+8EYSgRrNCs+99hEPtgrwiLNM5e3/L1CfwGF9fWSg9lShUp3pQ0RXBT2DogtYGtAQ5E8ZeCuLIKC0BZFDB6SGyGHBlT9sfbozqp33xXxAuNdqeGUIexWF0gTRQ3qDQdRBTqevNnp7WW5iEYGT/7Rl28cCWa0pU9UB4EjjxDdhLzuoDaufq/ua5cXybwEujdNrjxgk6Q1aOpmYRS3XFOwDTW1lCwYd9TXxot2iml9fuHVBJp24oBoLiWaaux7DSS6Q+ibOhAYppFvXIVzobQ9HTUascZFMkwQZ7jQCN1ZGLAzWtlvEFeodgh9I9xsuzHP6E3BEvVmZBqFtEp+SQtafgApZFIbVuBZSzplcZIEcQUss3PYkw0ZeVoUPqSwLOcmRS8GzfdXDUQRKXQTxswkLKi+ASrOE1d5ATQLqHzh++n79OBeLA==';const _IH='369990a7adba4ad1a5c4bf91f4457297a5cc3fc31a10629132d33f95d801acc8';let _src;

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
