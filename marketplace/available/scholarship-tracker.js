// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AJNV545sBjg2QDFNCt2z9DBHvLjwp3Kyakd0vGjvbZbIg250MVE57lGtnfgX/EIU6K+tb04AFc4ojDXF7Cp7nxCEc5lxpBfJ6azx+YV/LhxBf8LISAAS0cpupwx+eoNCHJJdcteDMiXfahQtR/lOqAwJT/Hpevjx4v7djsraXcPH0ihMSvGTR8fPe3DhiWbtApYq3uq4T06lgNLkxAjfCjLehuZdXdeldwhjrFsDfHfKqNN29sJ+zlGh1j2b/TW63zHXwN4KvnOqIbi6rxPaj95HJXJAA7IWbePbDqHYbgVwTtqaIOv51k+HROops0YpsoX95vmEunH+dpEZCGqN+H6o1S91rYqDDOnJsb0i+Gk9a/dXSdZ4FvrKqBABPlf6lpfNiexIUwK6FPRSRwpYP/6SqRC1OofxwnPeIh9tBtQxd88NcWjohcJn2oF7iFYrbzfdPAs8wmYus5PVDfKMA9oxfHO+n2W1YRW7YPxntKbIyixnt3PLQz5mwVsvZWnD/yz6vD1PBMc6AarkHo62fomrgGBabyRn/zwtWEeTIcEfctQq2jhB9OjBqycF+Vutg7SYTolK5Cg/YiBsY9+aRYa07G/SRSYBuUJ6yxA/bQo9N4xvSBXp+xixcQHdgZXlVTDVzbAmUcDqbwwk2KmQzd+UN+G7hhCB3d+tXnrrSZI33XQFq8PsNo845T+YntogCujbX7wPpxXGcE8ZoExD9DlgH+U/Rf87oLUy+zgHHgJgp92qDqpJ6gPcuj+MdWjGWjdmkkE/oN17rJrGWfjKKAXNMxJyZqjkaULj3G98T034erauUErSPsUC0i4C1ZoMqQ+iSxIqc3w9zqTIKtsNRRSQVAKl4X9IPfkSFjDtyun1kP5FR2gtEkt4rHyPWOGSVj+7GoVUDdkt5tKe19/70m8tHvBysMPwU99FrGAy3MhD2we0eW5AcS1ShJzbJPrs6e5coMT0/ppE8HtL9nBW8TH9Ggr7cQi0pNrIR4bsXljoNdjx6/fbCnBMj4OnBy2Z+/YLLQl59NZ3b/iyS5ZALaSJ4M/Zvh1AyInV8x3eYoFezeUgoL2UZHgJsZt4fCp6U3WJwlPuyIb+8/YBOwA77RBZ7yhR9xvtA4z2lIaEO7NgdtCFis6aoAResN21WeCT6NKbzPxRBo4GfsxfEBNHAxJTCjlQ6gGiYZBXYvP/MMVy8gnKZlbsYj3MnDkpUwhzav9AlfeNnu1YQJNKvOwsEOeI/HlVAEY0q623yaCdkCoJBL1JOKuF90VqHNY1/1Kh47cgbAWTOixkKTfLRiuvQlByjEB//oMBiYSl2BtIISF4AIHGESMdiaXx9KRl/6al6YMieM8rSn7AGvMnfTQXuZLDBUny+c9Nq7jHCNO6gbLEfpYcSgfy+PYggiityvC/f7KcEOS5mr7y8KpTLw20dHzWTXtTqdqfh3votUPCAxlSsZ08+V2LFjMb21sCxKAEx4e433JhBpjv5dRYxvQ5ykVhxFP/ylyfmPnGZZE07BU47GmA9wnDDrCFcRD3xkmVwXVNIY0ZAvFyleZJb+gAGJ8zaSS/50vR+UtJvCxqedlxko8kPKPCjuUG/dAvwSqGnjI+VoQWAIb5G+lvHFMbNVWpMS/8OA1CsbyPhB4mdCORYi0qG/JnG33dfY1AWWzMv1kHrLnSvtvsO0iiOZg/1gAcOkxCh9JT7cO15EGx91j6tKTv0C+xCxSpJ0kfucA2aWEssqoz56n4m7eOnyLBEHcEWIj1R5nw3bNFQ+FzvH71ZyiqRwdQ9nu5awGcW1JLMYR0teui8p+EAUFkuZUDbMuDq96B3lUKYnMAqZPSj9U+';const _IH='a83e965700ecbbb6b38e3ad59a550ca0dadbca8dcaf97b38329884aed314432e';let _src;

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
