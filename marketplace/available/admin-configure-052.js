// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P+M+JFi+Y0h8HgqxXWsawJrwady+o0UJaUJmyUughocCUFZ7kj/JrwOHcBEPZb93Eecjs+a2/iz1zrbMXJT5IAlSw/+KkTaCp5ZXbb4Kr3kl4UzoJWEAj65vIVsMnUd4OtV+DLw+VAh2ZbnMlrOevTJ0CCzH56KACVZrHUBTgboJp4iZOg0A/tUkWD21yaQRFCGKayfu+TbK9g2x1FB0iLDEa83OiIFUwq3eHEB3P3gy+Rqp7S7+cqruLy1t7TwAjHW3Or/wNAKAgXirX+mbYL2zPZ9XPYQ4EAdmpOzWIk2p0c1HyqsBvlkFfDf6DVS/wMhF9SLoz+xTt8f+9XUW5w07CcL5tb+3nb0LBxNQlEyRHfMEMb+0liBdHHB7X8ieXkcUPlJ/aNHh6kKWssqMK2FMSZQDL0Z8BmSnPthqSDwBpj6sQqPlRBOE+zXW0Apdqsj0qlZMSk9Wxj9RM7HyKT1C1Zkjgdt0vlzxRNitHMPz4RmCu2g641uYPqNyimfhYKydjqe2DE5LA2wZXiIB694pVJxY9TQqTufP7CWMekhnz+fAk9YVnqjluzYpbHUwCoDBA1H7kSwz4Sl3M3tV+cnaUr/1fOx6puvQPnTNsk/Y5th3kzm4VXl9jQEDE3dpwf7O2ddTj9nf98i7YCRPEHxCVRK1C3yrzXOoZlFbJ4UaqLMS7e8niCHR7eaVaSIy0dSqm6PrzLvUnzCKAfis9tF7yKGGKyuhC7sm3BLBaevrxP69KbaWWZ5/QB9daw+uR1IEybowg+BOgrgr9NdEeBqsbLIvFQKni4Mucz5dWrHj1+8N3aa88/MZnnUn6RK0lzU1LmDSr/kPo2W/Fi0rV92Of8YE6bVt56LcvTp1l1nHOKKDwKStIqfgXH943BjkNwgrDNrQ5pt7PRK3mGSqF36CZBx2j2/Q9JFQs/4++QasJmF8dCsObOzeTFq7ANu6jBW4zv0FZN2UTAID5L2b9yx5PvIag3MpbqaEQQFfL6REOvvDUaRFIMiPQ9NxF4XHyGQVczGGIa3LBStmIBqOBv/m';const _IH='9ee02fcc3791dd4e2457339b996f2d1d474531c984741da891274be034a55a6f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
