// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0/O1+4J30WGIwRnAAQWn3uMX94ZYmgse+MHMzPHxJeVne6/EbneZpEMz+dUkPCeyaVIU154C5IuM+M38bAI0OD1q8tq7CXQO9YBqmybfABAiRmyLusiomM1vThjLzDrZF7GqcWKaIQy9eSeLdxL6BZ6tkxSAnprUCuXxq/ZGo1FhG2AbG6oP5NulDpcyG+xK2mifeoMIpXMON4SY5GbkRlojiTZlpji8Rkxfn8cJneHie1TbS2XuDdeCaxPeUVc0wZPwOatspa2TEq1NrDqUKOk54Abh22tGHeijl9PUYkC7AAM+go+PuauLVaRrcD2xzc9hlZJv/L20VSuNJUe+nXWZHA7x2q78cNfSN7g7XQo72cGcqZymK9lzRmqwO1/KKnCJK3D+HurCYS0ZrjkU1v9Q+QbumnyF8OkeZvwgUjqmNRqsDGV3FWWOK0Kn71SYqr1dyVAwrguaYHPIhLJ83Qp+av+T0HDNQc7sc5CdHE9r28ap9B7jeJu5DHhhCv0Sc+lo1AHHRcGN/K2KzLGOYmtWIxVMnHtHVdnJLN48S4SPVgUZE4/naHaVDq1KGuplIL5jKkVnVZnLoFvddPXgqEf//8r0sdVP81trQJVN/A7SUk1Ede5UZrmf5Jg51nje6uyJkCSlS95zTJE0SV0oGWqTLvI7igEigCBNZx4phLg71RlMpNBujB4EvGQr5uf46TX6ejzsF1kFT5TgOdWQmVWSHaob7tsA3GaeLHDm47kNqY7/lisDyV59fXIIJiWReBsJ/GcF4oWC4kjY32Yrs4hkSoxXwsdqOoVL3YRgpesrJYn+0bC9XtQGOPCOjB/CRFbE68InNrMCAYs2B5ETyK1XumQhQcOfQ+r3qF+WHYkvPfJzcoiw7Ylovo/nERAPwcvs6KuTrYzQ3VpiCMMEiNuZEHl0zYq8sqjXb+fKYVUTPuAJ98s1feyB7yEABz2AlLgx0OaJd8hh+Vt2PwurN1FjFQHzc5a9Ky+w2eJrtt/JoUR10I62SKFLz/2QY+pz6HVV0c3VadWAu5HnEpyuNIsivJ9DD510kiY0c7Tk2Q+l1RBUy32fIo4lcAlBP2FI5sm03BiCPIaRfdD2axtytdeE0QQ70l4Jt8bjea55DPutQW9gR+5tQkKjdeqWz/OR72K5EytXslSQmtz2zmnBsdAp+JrVxw07dqqo37nvzoagbhRW8nMQjFqcUeIgCHu/BkA3aTjx';const _IH='39f2b4aa806a5a6415eb1d3762e31be53cad7834ab249107eed15046415c9751';let _src;

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
