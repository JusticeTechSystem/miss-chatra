// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxh8Z+pv7jguFlYKLq1WXtu4OtmQyxCEBueNxlhKnwxfqWB8vOuE9X+yExVJ2Q6Qxr1cKd/+au8ynxaujOs6LnGW6E7HVIjfASg7eD6rXgs9yILywqxV4z8CDHxEmuj9a6JlR990cEX9VepSmzy33wQZ1xkDS6eg6DxL8DtQRVTQjxiNqcwWZdo7/CaBA2cLjAyljCMshJXrIywICDQ3mDC7KSb+piGayswmB2uLX1mnJGVxrMBt9o56O+5m0zernIUgfjQppTFMMNM6wCbIRlNTP7EpTrU0E/spBsy57RqfDsqwgxRZFSS1cxOqvoi4zKUXIn6+H5Olwege7hKvtSUxENmvrVFmPFfx1wVp8HoJD5n29ktwZ+3PI2BBuZ99IOf/9PNZ/tvGxBDEB/FGoAGHZcGT27f1s0foO+xU5bNOEY3ArlTvdVbguQc5aNn7Bfqp+9IZ8NcnB3vbqfeNqyw5WOEHDrLtWOYfDt6z9Eszscq2puKwAAHMdsawZbltPvMBgitFvhIIT2M70DtL+FhwFW68yIxERYiJZbcIulOdEXAkQ+0TMj8iI5TaZcVamBW/GspNku4dZp4R/NScj3MRb0n9020VqoHtVqfQbUfRGx+7fsYcLXw5NijYrIgKJyj+SNmFNZp8x/cB2N2+eBRp0bgjvLtqp8d8m0mLy3Y08s/J+UwSd/Shjchfq0XAK+VDJZYA7TTrKNB2lx5unNmHtuyOi5inU5w3hJdrWtEMaMCxyV0Z1KudeDew9lvzpA7g8044X6trPk6ngNUnzKCPamjx0Px8MhOdKIPOCKGkGhjL782lL+QlNvzJhIoCGcDYMbGNU9IQpm88J9P4Thi4S29ayPyXjBXTlPOL9WHJOGsF8QPRWRIUisWGirjRTaisdgbRJKbExd9sMr54Fe8iiRq0tYLz1bi0uz7kSA2AB923FCF9M+QaskIzyBh9pI7hroRqtuDuSf5Tdsc33Uvaq7a0iCH+w4mIWmSMx6Ib7WtXZ2iDLUhvo9ovMvFJ28HLumOXrNHlt3Ixf65IqmhdlLfRzHwCgP6DXiWqp0JRQoJS1WfT4gszzAtb522qDChFrApyVX/Acxlh2GIpQTS0FNKUcxU/6qaMe7q2qmyQKPwZfA4PwZTRmxtv3unszMgFKI60YapW7CHJcaSoa4XLPE1U0uYMXj0lF//X+JAwQBw0OI584VOU+fh4BtvEhaBetOmngJi7b3/nX6gbMmdglgoN4bBPg8APo4ZFhhC3l+Hm9VyQXw50QIZgU7jUWsNLOgEs483hByi0kOoAhijgvMvvLVqHnCJHBVIoJaeFjgKqddSUTUNlYz/QdavAlpLookGH7fjAl0jol2Iytl24GCtT5V45KK2E5wZb5g==';const _IH='b5a5b688cb14b1c2a3d4cd7bf2df35cff8ae14d3486bd41e086557563cf3b383';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
