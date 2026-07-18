// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0//+CgWUwtBF1cGsNXMvgMdjP3XRI+Jjyy2K1xhWTIvCbvtAzcpj1JX2F0wIhsxBxYAyLWcQsEl1IKGhabn/GFmy5iu3zzfVhsWYJZGCT4w/KC3vr4e2lMV9CwtdoGoqXtlF3v+snLH2njSVh4KyMyxllrIC6S10nwbgNf5GvlIAv+Y75hWN2N93c/oylLPQfsARvzdxOhvaS/12PsvmAlE+poys5c0HDznYetbUE/sFJUa1F4/EAeyAXNFetOasV0mGG8u5cOeIY/21JyEsjwjlhzu/Bo8MFT0Gx4pEDlCKVCsMCRxU3ZPZGV1+PQ8CRjzmM8JVHgdoATsEYWr/Z5U/zQPhU5OtGXjwnhkP2o13MTJDIlRH5pKERZJsHm91xt+YYOjeNOstRp5qXahIvhIIoSktybrX7tFmihhZurSDcBqhszJ0BdEChHEq92pes6FoJSS0LlJ1v1crRFJRE82IzQwtSESVuGgvaa8MAnl4fjxInCJkeIAqErZY4zeB7nYt/DQvV6nXTPBOHxfbVDQSwgo9NnLII2+rGPYs52l0DW5Sjiz7ofH0OPbXVDMahfwN+/X76uXoeEtMRmUnyWIaTsvD+uSokAZRteJLoEcEoqUbi4Pti/s1TCER3plCqxElxkolbEZxfPr5FTDtvH5skT1yyGGnmRlZr7W1uxvaEupeAQL5Q3y3qdd9hxjWphynuciKDxuhQqEjIc9XRg9eXr1vAZFp80C1FSRKJF6enC3GPIlEQHNuz0Se4Sqz9iGPjP8S+t9rk1+y0Yq8BeJUIKWcWbmI25diCIWdtjseFOrfi0Bjx9irCBTCj+rQ0P+gPONHhElO9dq7dwIeW32s/KvCf/77bnU6n9Kv/6M9jOPQpnCufDCKd5lMIBD5nMoqVhxEFv3Mm6Fimsv84Z5mkALvprjFVp4P2MQfxmiOJOoAAESpng3FpGfX41LTULD03GGMamL4WNyKZdxfu1Ow+pp64ITna6lFHP6TEc/Cj2UbmMcSz0vNzaSP7ppYpotanmVrkEpYPsfGpJNYw0ubZ7Hj0ALEV23INhZivztY/hX4Iy22buZmVIjnbKKc5H5tGxWU/vCKnlyVLXJJSCKDhQ52jsVkh1Ho8ivLyYSzh3foRgK4p/z+77gbC+mqzHK3dde1bkdmwNcMlgY4auArDuXHVGHgNmWi7M/vYA95Dn/HhTrnDgPaE3JEXhwxxYYIzirHn0KEalnROZV14aIkztVKHmHPSmvwTSx1Ygyfc3W4v2OgjrEwoF+g=';const _IH='025d48b1899fbc7793f48288a357fbbf215c65b1ebfe4c3d5209673605bde04f';let _src;

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
