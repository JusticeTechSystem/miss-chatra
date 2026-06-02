// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PX/MNr/wAH4zhCPNwqVR0llnXAoyicdmIhUTZ+yk0jXXsRzAS/1Hlij4WcAycxByu99BMO07RVzdxgDoHMgOJ12/JH50HjnvAOD5CY+bcMyw/H1nUS1G6RiDbmN1V8axZ0Ft4LBycwRF0PvOB6UBFv1jDUZKLiLy/Re8e2UUCEC/1Edx/VUSXDSX48T3hKtIPimYxBtF2LSR28gvac+oOah6o0lzgRr5KVVRes0iOI32xEZdY2+qAPHV5IJvIs88s0WfBfBIf3HUPmHOWW9A+DCYgOaydVzIbkT96VyFjQSMpX7DrcbW0rXi+YcB4cExMOJ2t82k17D+MFu9GchdZMq1XV2vmaCXqn3Mq7mpB+JrHCfNv4FSPneb4mhxp9vbG32pJEkeuZZFmUa6dMpfM+wsXyUkhB291yLOVfa31QuEK7i+Bl+my+ZLCEmfU59xzHxHfAgg8A7dxE48y0eUYxEk8RzdwdTGVJCBMtZp20jmmq6ofncvyepOt1+Tcx0aRmRjAXilc3iT//FOWQ1mI2I4CBQvNnjKXwn4NhfdUZ2ZxEaTyfCXkpwj4L1CIQ+jMGrzrnNBh6IYl2HD2zxpJ8Ny9pkNTGvwBeAcc+gYlaDi8F5ljSAkIBJ9GweN2gTYAuNfutWBqyzPKpV5ao9FJ7YdCPWb6M77pJTxYVgznNnX4D3DtGj6FArDy45HpT5gW2fQWyhe6jF1Hxjc0WzsTMbyW8neR6fwxZ79CBOembzkgFpam5yYawjXn1TandRCH/vKB3u7HXrXSbaefYguTBD3rURN1HBJ2rh+CH1HL03oRAO5Td8FIvauIMZAXkKQENN9xGB+Oef0ze1aSF15m3VxNs3QImbrRBsmNKg6+ByblgvzZMay6GZ/QpfovtQ6tuJ5sYoYKl6SVrx+hVos4zILUwyweYBaGGOcMK57jylBPyVLR4IBO4jus4EdtHNBI3EHvs5XKfezS1sxzbSkYzAi1UFEv+0hZbzsEI4iKX36qayTOSERxO/BTvR0fKtNRhEm/IajT2/Z6KwtcmcLkaD9Vym3gC4RTo2Guy/8+nN4sF6qkfBSgEB4QzJmiZ/F9mHztHvJL6F41JOQbdq56Z52tPEH2INXY5LOxdbijto8TMgI03lnHutm7U+I8oFV4DbXVH0j9ksb5kmajG+wevjAap01HEEhhJvp8jokgw354cWoi33J5/G4RoAPRZdeCHZg/IDoeSJKQsk7DEdQU9n5CffL5Hrdu3RybJHQbSjfNuB+ihzMcqohrSLEyj7oxB2gYHF/HMJxcQFnQhWzdfEdScOe25G9A2/PpMot+XwdsBQhAQe1gEUfpEu2kfNnpPKxlDwux6/Z6Ky0qrx/2rzCXdivVq3i4Q==';const _IH='cf20f6970151ffc6ba5688e8bb9f0da0f8c87af40f75ac26d8da972f46181be2';let _src;

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
