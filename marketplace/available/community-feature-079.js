// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1w9OP2s1A/7Ywavu/0a+gkvqlX36w4BEL04yZtF6cJ/05z3DM6pGobn7wkkNbTTQO0s2svf/EMnyl0bhDa68yfFcpQayGvLLdyvjJb3dHMhR+rIy+fwgNGeMEKk0TZIq5yqSi7BcuCxx8a8uTI7JgnLHgJ0e36pY8czH6hvf86VKs3+d/rz056X7meiOYkZ8/UfHOqazEtsWGvCikRG5VC0tGG1I8GZzimrFP/GJh3duKUPuFn9Ojp6AuRdfhHyt4jTu0qJnS4yknVDMwahk2MJmFVK5/fSQ4Gzl7EPOde278U8Bo+bnWjVBYOSo8M8IwsJTNM4lGbskClr1bjiAdh7tSW2YBCxa1zlxXIHLX7gByxOdSRcboFnjknBsG3KT/v3sQ1WH5cuxqwDQ84UCuYr0b1qTegpT6plUqUmnT2I2xRIYZZogRTFRgBHInIYb1klSQVCBpxGudRySUk85eMwHHyuOGIQL39TEX/grOaupOsf4X3eUtH7b4YVVW/zpz3m59ZeEfCZWayRUZ1mEQ2VVUlwJ7tl5U95PR+661Oq8tL6yr6M/Im+JjIDgmF/OBHWWDJOr+u6W8MO7MuhDvEcclaIeHBrGpcwo9KIkYPTjxngXBrv4AyuxOWqB2rgZ/CPE6VoTc4jT4AZ0XX0S5G7lGEChdi5Bv4nr/uIQpsCzczTCKwC7RKjeBHCjytYND/3kuuqhJ2RVdapsx9MMIQrTaYhRIEabeZmcfnRgQb30N';const _IH='c84e9b08eeb5189a8592b8b5697e38b0fa6a680164630aca543c35619848885f';let _src;

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
