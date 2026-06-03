// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='21HEg8rUEQi9P6aRg474QQ38x7WpuNhbYnqErk7l0twKOcbJy29Ehp0tIvYmwPmXY3Wd4BtKVe+daxCDbSr1NcLiS+T5+OOIlwmcW1rtHrr64b8cbns2iPrRa7smqE5IqkfQl/adsebqY9hp8la4Pkabg2xlkLsnbOrHyW80YvvjX70tldPHHjI1Wo9QwmXvVc7lJgijrafQS106ob/Kec2s4kJFQT8hcsKJiqkV8grGqqM1nS52tZWeFf2MbQL5t1iaotXSWIW5wPNguGKX2cZSxbrzU+hbua5AfII7wDJnDlERaCT0rWhFug01XBHSApGVuqSo2iYH1E7SIdjZF8eCEDq2tExK1wSNrElIaQJ29RNHY8VAmOweL2pAKD2NqIlOH2tLRFF2PXEsdUxegdd9JH3P+gnHebds+RHRU4uuxyfgH8cPp47A3O/wd4KEeI4KALyq6vxYQpmi82yLAHhdk0dBM6n9SOdAKpLMPRoyrYY1K7s8WjpFSIrC+KJcGV1mOS0vLwUbd5AghCiuWaeNImYbfz+JHtntVttt4WRzbfojlvdw6oyi1hlSntYBda5jnopXm+cXCPV7vjjlmEc8T/nG0pTmGfOQd3D3c6OKbTB+cGhP42JWrireWPBtQHi/OpbQLsrtEKLxsm1Xq7qlElQRrhb/vtM1dNUS40xTPJu0G1oB2fOD+m9MSrOb9vUf1uoNszZ+DTNeFYV5pXtxs2dyyg8tllycmveVaQ==';const _IH='9b8c53bc5c2128283e353ec2af25f0a442a93985876ea9ac154c15d0467814a3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
