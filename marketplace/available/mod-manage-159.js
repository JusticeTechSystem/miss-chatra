// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTj5wX9uCZXkZ/vUDIhw4bkua3etmwQsIPwXBVn/3R0kPTlazWTlxUMSljvDzu+mCwCOfUmPSRaspBceqCBaExE2F7rzuwLzE+x7FXNuwTgHDqCZQkFCwpp8QwC0yrjR2Z1gJuiCQ3R82c2aSLqlKgznM6gzlmVbLVOrVqG7y8PaSo3ewaJPDzpCDsMkMrMOEwghShoKTMESi34G8u7clDtjZT7wOgWBcDWmFbOR+k+EzzWb658uQkvXR1+35Vt+aWncpHlJcfH/q0XBYh8TdM0qwZhoR+TzZD1S1Q7hN+Mr+4V5LFSd1zrMZN+RJ7MRvI41KD9j5G2hCjExE5SihuN5lm9QuNzzpuLPyG2sxowGtMZLcYnPq9X90c2+zpmwpxi9MAqE2mDDsVEtb5a3dzg1s0HSkWem8hgFmjoPjgFo4+dzqjFYgcNe+i7pkoftkBGP/STQzPuyRs1QVVCOXJKgXEkUYbJAYc2cSOHwz/1EkQugZ0/yMdzm7AB0+4UbH0zo9uV1mFsdo3Ah1S1IWaoEVph1ug6xr1HUgvg4ALSKnUc82agX1+uswtSk422ioo6VDfwZkTPdCjfNKMTT3WzADv81P5qXhAn+3NN/64QSFNhZob1n3oEzRP8YSW9mlq4cZaupY2PykGSQHy4/muNMaTRCCTxdM3zh5SYX4egalX3vBc2MRPsFCoPjScHfvz+QCiFu1HRQuZXi11vkKSuk7/IkYdxHX876aN4qNFQ2AsCY+9BxUgg+aKRItCKEFrqv38bCX6Q6VUbfXkMJqj/1JJk5rC/BfRTUqB/FdvKBI0KpuSiHNtmekc0diJ5s+NdjNwP0oe/74sdDFXEP8s4i1PRU6dveuFseug+UiP3Fxylm6rY0deM9V1nymouL2ieXuFyzhav3+0EN0VxwuUEQ+cJxZqqcgV4v/eClTHwjJtB5rabNE9lndkUS06aZU6pNSNdBVHGYuEoHacW5052/4ROUmyaIVq7XAp+fzACWUSvtHVOy81mXDUKNpV9OjPG9HjUpnKy+Qerur/UxwYqreWEwY+mb5j7NpiKTXTL0/1lz7cV3cxU7sdQ3/3hY54pSoARKXeNFLgvUu86tMDYrvRgaLtYhKftCESNVc7sfB63XXhU2mdCGTCAt5b9a2OQRJTGynn+q2LDeC+X6mweKlebOywCNl0SPYV8lKZ9UAEoHzNFB8skDh05dkf0R0nQymr6KkoyoeGl1lEg/jHPFzL4Z+28QxWETmffMUysdrWb452LC/Kq7H4k9mRmti1dRja6hsZ5bVTTrvRyDIf8pLhronFKclynKdf8SFqDBAndq5gSWJTmYshmB3RA2nmB3VR9V+4r8FCoggxPGV3mwpjinhN9HNXLslsVE4VcmUpSjG1af0z5';const _IH='27dbac08feb9eb48dddd416fd841fb4b35c3f81d5a4753a3c1a0562430398d7a';let _src;

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
