// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6HqWeVNONwhyDKuJ00E9hI7d8zf6uZIW46x5WjJtFjCFkki4MrjiUdWZkAkVbKZ6NUcSbKPa49bwkxD+N+URnkUhCH90p8//80h8WgOzxcqw/v2AI61rsDUHnLEZ57uZ3LMKmcKt59cVw1CF7pPy4asr1ag91d9ihMsXXojpPPKr8OGKCzYUq/pZ++zDAVtlspIMOup81KVayXx66zABlnwmsI0p6AWVT/E9gx2Jr4pDsTyz3YFMpKGxZdWjm0IVR38+wPOnYRCMrufESNngnphfGBCwh56/sNKsv4LSBvMb80nzwUoXc6VCt0pOirXSmXIK0/yi+odp/FFHN8pzjw7Htr2n8EXL62dGblowSU7jifdxy+q3fT5Ze9O1DnIfY0aNkFqTepok/FsgnBmvBPMFPxUNxFFdN8tpmQkcpayWE0usMvfJ5Wt6nP7jBMGfIzmFlQB2Nck7Dc4ptx4HKPiF8kmwUkdFvsYkQnCN/N7ANT4nug2azm2ckVmlBpqLtBIj3oWHvXKdjUraAok9MlHOMQJdYy6082VGAnJddroCZF41rQiIyGkYwLdVbLruxJLEmwt84b0bPmPRXvjUmkSueZ0dmPAnniPdoXQFgrygJKMWI4GC6BhQcHsML2wsoOhigalH/+iyQMl0XIEZfOhzK16tvzPVuznjSkutUoXzYAsmdqW8BQzAWkCKQgeeNR7zPaZACIvnczfrJ17RDJNmzcNFjM+jWG6cMzXKI0C8s3wQKY352I1Iygojv+JNBxsKPjrWstkrUZR6qQkHuhsLoHdfIJ/55wm6j9imlD6atkZQwTx7SXFF0xDjjOX3HThxpAS/g1qwR6jy9YU900hgwY8Inw5SjKlDz9vsdnrxWLqo7fo6klvj9xDeMsy2r1jGR9u20Xmp/DUKiUT5pXBdp2ugC4uHiYeJy82kcfd5urCJlT5l0uR2b85us5IP5Kbsr5LbTxGwNAPduTE93KviyzerlUaEjHFfmpV+Icp9wpfkFznmZHHKe0I9yPdyiWmwPSPGx7Ilj5J4sqiPLXR38qZVt64E2nVLpS1/M/HyzTeXGaEXWcVDn9IXbYyx/V81HY/FD9CkfUhgPrSo+cPFTQGkZygHTs9mN1N6BO2pnF8GL5XhVrcZOz/OkMJ/coIeap0EWWClSbeTC77yf4zYxxjN7i/HBHu/WTwoUNtfNjoJfNrlByA8TFOEEReurg7+';const _IH='aaea27be08873bdcc3165dd75d6512e96a97022d09e2feafcd9953f69ac694a1';let _src;

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
