// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FVorduYdJwhM/LY15oQdM9zy2gFNYXRtj5qZ++SiJYew0xozuLhNsWn/M87aF1n4fWI63hlbMyM1Z1ppdW2fcs7PH5worda1lcGuQylsflaO5nsyFZT8Ny2Og3Viu2ZEvEMaR7p8oOMBjxnt2d7oCinS3/boTALsfzscg7L6KTh1qhBhMQJdRg+IYEUyfNLAz7Ta63RFF3gFrw0510sgGXLVgmlh1PVd9XF73/dT7G7Lx7eT7IiV1Fh6Bb7K1PafYrukLeQY5CtGygrqZXMmw4XF2np5VY9esASssaNF3R5HI/ANgh1zmcnw1Ou6FFWkAjS8rTbNbiIR0AgPUZFFHGFKmyOkezpwyKi3Fte6lIknnmxLeA/L5ARDDTdFp+JzaU0WH2iScjepjnfeZcvaeoW+7iOFtPFsRtNyB7E6ElaNCcNOuqhyixseG6xKmDx8rQDWVp94a8gafDIjuew5nBPPtUUknwrk0hoZVdBDTFfUMHq1loE15tPGYXyxRV4hLFXLnnc/1u68E+CPtaZIbR3luvQZk5vmlPfzTTXsKTPqyuJW7j/6mUJCKfQxxCOgOtuY5eZtUY6UIItiI1aCj6Lt45MSH13FLsptVW43lSohqlQBddOtwz17jftooUXIrKzxYMRuoxmFvV0uho7bCjQ6Qvuzryi+pGU7rn+kZqSxNQqhYJHgaoGD6HYAG1OuvjWcsyCRmP1dapPNCQ/iVMJawHW0nsxpT5O3h6nmVbaHatyEAQaYKLoOy9ZXPKMTyFEogCaC+SVMfcbTKLPJx8mBIryUEXpPme2HIrAHFw54jAnr7ojvFdcGgnwAuvNI8S0Xp9pSxuK2qt68NuEl99legXwCjh/hBFyKyp0sxjiQAUWui4lvBvQMnjUx8/PnpOtic/dUWQnY5wAitEtkS7as+0wjlhuZP5YcCyz0F/8D1vPf0zri5HeI5mxeA3N5Kkc83ZKaGoP55At52Ek4l/vSZyzc6n4d6Uj5vVFVQD7WjtdV2tHh7wlgTDOuSGRQS37bufupu7g1TdFW8YYmkR8F/Y5YKNTOo+wE2HgYww5NEauGA3o91oe3UXoA5bwDu3ZHod3/aqIeTrV0yJ7MXJ2JKEmiiLcsDegAfpg1jahlT9fG7irIatNKjM0VSW28jCmwhhUjXEKrxGcFCDq1klWcm1qUcajAlFf/kGmhkTkAH4QJZqEwVs1Qos357IFDgWyAWSCxHUMigW9OLP1GE846SyQeKG3TVsgRxz+cabL35l1EIRHFB64SX83YLcpSgtgbmmOAGISP5p4R2yPDb5WicHGX1ldZnxh2odidpqDwxfY2HNPppTen7AqN4xNT6S+Koctujgz7gkAODrZ1BfC8fIhLMijQ9wTppU2eypVpSXDYwYng6+rLZVBLY9Yc691cXIichjMafr15zpOkyVALle03kGWdh+BSckQ9HuO//MGjJb0d0k9kWGkJXfHYiX6nF1rNPkijjd6ITqLTc7Xmc0WsGL1v7P/Y0Lhv2Z3fVIqY+8Eb/zOD1NjeACOAMDPC0pLQ3zwVpqDQqYc5NIfv+Bgu0I7bPOQYmfbfASjCmHVYxNeVAg==';const _IH='5dbf936061338ad3ef606f4c08845e2653a40f1371ebfda75fc61e8b7509097b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
