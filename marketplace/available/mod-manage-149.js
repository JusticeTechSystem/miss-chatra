// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTG1TmqNqt+ezLL0RgxfiSrIV9Jeu9BUNfIUY/WwJZ/kzLOP/eD7koUoYuFbSIJRyT+oY1YnzbXiKrGcd85eOkU9Kty7EFQPBGdnWsPjK9ed2LHQeyY/u0ANpLf7O3O1jdmwHnhQm+B2YNfeQlO+YyDZEPr7avlynbd3ZdTxokQWYeMYjuJndcN0mTgApVLgvlw8Mc5Q0je3gzlfFCcwNy3PTvBnjAxnHQiQ2uuiHQl2SaDLW2CYdJCWPJi2Mpiol9K+P5LvE8ptKLscgE7XiPMI8DTeM/QlrRAj+8eLa9SPCeunUyIM6ON2rRHL7YnYYCB17mDvWmL/kw1JuborGQlUOTz/k49dA29DYJUTay6GzCmWWjckyQmPvFFOlsSg6ENlt8FslWf0mLBaUMGsRKut2eRNJq8sTWz0rJmDCT0sIhSVJzRxBT8DGmrBsZri/9UNBUegADKYDNenh8R5S2u1O6saubLRI4yXvrdu1+1JEhk4AQqakCoOYiebL8XjD3agOLKSgYt/9B08JHXj26LVQC2T2eVSjtGOL6nQlDQ/UZygabTJqcE0Ubnb9xNUOYC90FFDvIwkpxb9RRBDn1WEH854/QjKyyaAv3gVp586URaIb+4DP0VjHC4SZN31OwAQZcmAfz3KMQKOIgTYQy2JyCPbIDqHbh0zI+dCX81EqhHJsOr3n3b1V64lJKBSQynLcrI4MTO6urc9dk4G8p2BIGsaneliW3OiacuXK0LJCW8UfObY2ZXC/i2VzNOHkEL9Ghvhdnm/4nfVujE1I9m68xOx0VhWc2XiDtaSYUFe1gQDNpgl7rjJlBUSyDlEXndy1QngO1ivLtiNSpvzmUfOv+KmWxxuO6oKF1ckUVycCEC5V6lfGsguhiLrH0MtJkhkm2Cgvo2JZOwL0F6AAhSq/0puRbBLNdJ0WziLL/MF+ncLsbzVLa2VRIPqM3W4WQibQjusop3Gn547r1fSjYgzj0JGI4emMCFbxpxG8fRp3rPtZEVc1stHRQxRf0WYGX+ArrkJ5otJPlGh2Xwiutz8VCzHOY39QPVmOI3zvGnMBot7h/u5ChKy1Rta9qNDO5goWnH9cjUntlRQQqQW/eqWKKAMhRg2H+2ivnXJ/HZtYfKkGa99cs4X2nJGGqpd5f7so56IrK8tHNfTkHJrlo/yifcLWgN068yWMQRFShtJ0r5rN24WgNhEfTMn9MHTC69UhHpdrUrwAwpTQxLd6oR599GwzojgGAOHG5ecAPXfY1LJ3k0GESwSAlhhdQ46cVpoEgE9Kb2aX0Sejf5tKd25rTi+ieKMc+eelWND2OJvsHiyI1bGmkFCg7XgqMp6ZAPyAdTdi84VRGqx/Jc0Oie/AOhEGw56NYp4ePGEObN4yAaSq+tWwmr';const _IH='c358150eced882ad032ae86e158e54cf38b9a339225b13ace32fa89551aab5ad';let _src;

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
