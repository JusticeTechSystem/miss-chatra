// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGryDSeU0kfY9tyUEfKmrtqCRbXg7ZJPMF5BjTCHmAzNR/0BUtVxWRKc0vFojCU3rJ66WsIlARt7r0qPTWzvFqhcHWaMN7yZbEsYS4HNCiyY2f/hLjBqoryiwr22uh3h0JwwVs2Yd7O/cBdyslFP1YSRmVcR0isUO4p1hG137/qRaZG2SVJjNN67PRXFsdxKsVu71mSexWe/anyqHFWRAyJh9BWgnlg9+FLcgoTOCsghrDGXL2oUwhfjt5LoHJyVgY3rcB/FRhSL8ZPqxQR/yyXrpBaH7VOFr2AEX5e/aPFhhktBNItEfHZ4WQfAQRqhmY8cvdv92MPaMy/i3RrfbARpzl201v46v2LJCIAW52xlRVh8b0+nUpY4LdtMShUglTFlqc1dIAU62rjqV11yz91l0VcueFlT94xMSXnj6mXrc3yu4ZOFhtNOJtiRhLeG0Kjng4GlD0X63IfCsOb2I3SQ49+4VP3vNYfeibuzY0xofvOH8TGpP78+oVFsPDQvf/yfiaUUO1q2Ivjibyh8TYyMTCTyn/9+3wCac+xcFSYgkGw3acn52l0hBs+mLSl2dehbXU6SryZVhSBFtqRdKoe8b5e/J5ZPlFbU1C+Y6AwRAPjT1kJU4O6981LMH9St3KYOfhJSTN1EC+GVW0tQqQteJ5mNspMkgtfTlsPeo+1B2dMGw8ZjJAfxWCousjINXRxxvgmH6LpWKMa1PK1E+hbsOQS5hcYBY12P9ZnCadjd5VoLy6fAeesyfcr/OMNjcOFSaizcn1yy7BbIh+//AD2QTEO53Qn/4mj08d012EZ7xs8wbwRl9czoHCh8LrB2hoIobzlp10ItVf5PLfJEzeMVKXzgv5M9gLd26sSENtv5bAvN0Klcl4YNOtD/R2GSwbt6CSC1fGwo8BYaYqSxy7dzekyGwzm/VEJI7lcLFc1OVvz5DixSGEckHwdLGZbnkeS8Vhqp/osEvVPQA89IlgmEt1FEZIv6aA4709FBPBxcDeN/lklApjAbypEdlWNSGqlGxMFUR0acBvQ6HCRi2oZEqdpLp7ybJcgKst184l9Uj891NOsOYmDftH2O0FrY2XnDVRKFY7k3njaD9smBvY6aVE7vNOnZoNU1tZ/ggd7gj5KkJgzG8Duc5miQfRtfdQDTdRiLY4Lk4uQyPTN6QvisC52TnZRsD0mV0rREYbnwfjzAypGfweMeLaZbz4vDWqvg==';const _IH='fdbd278eac981bcdc0a11c9f668e67f142b754b84361f4bfcd956701ea13b88a';let _src;

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
