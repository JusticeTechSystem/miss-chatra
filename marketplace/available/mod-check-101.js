// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fqPJi045cidZeirl03Vaf40M80UME3Fc178VPNCo8k4k9rHqyEJBGa//OLUK+aXkL+HDEj+4Toqos2EuhWQHjmIs+g87ITU8uyJ/98yy6hwXEztHjAbF/9jFp9p5li/VNqTLaHgx+gelj4wIelw5FFeiWv4bfXcbGYMMm8Hn2DSoYwgNJfw/SwtGvyEG6S1uuk420k6Vvo+HDilmSqJ5J+w69ZYalcCeZuYtJUV2r7sgtdsTAQYQdfkn7oM44GVBa+r47bM18nXHxoIFbyqPMBgWg4N2l26FnFHFGNSPP39K6keIioL0jAmFkqDuyMWY1SZ2eRsW0jXBcrUxulfhByUEtnwAGGhIrzpBHfJOXS41jRSr6jMYXOXZV7k5VcUAwvwWBSM4Tk/k2cc1HVZdxCLRovrCjG0EDTpsm2Z9JjLKDVVK2gdUIke0A/tjz0Zt2SCpwcTVBO3XMn3fcXwMzujzyc2+dKzOO6khGyLveAPOJAyj5NNtA27DcEE9cyLluUAPHxC40LYlXWWdN7hlo7SyVhQjx81llQkb21E3ysB33OyGcWTnBalV1qYzJ+LjxoXFJ55vKFb97V37H3rlG05IzfhpEKUhK1NRFjiaN+d0JbquX1KgWOF5z6qQJfAdUDeu2VRKDL3/l/nHMIXaCgJEmdri0F30417k5+F+pDWiOaDJMDi8B6TfFt3bBrMrjb2DKUO0u11FqR7nUaVBCN0lChJ6JVV5pPuJlyq/tNOcI8BDhMnhxp5wB5i5vl3Y3Fp2oMxVgZBSsI1Bh/xdsjbsDh+6nTselzyBfcHUUkaIWpYqGsnJTBaWd1WsBxz6KWJpGM4Vwht/QTYRf6LWIUZLGVyk6KMkXyShkUb+lrpIn5YGgrJCbmR8a1gvRVFtL/DbVE1hx/0pBZ5NddxKlXNjQFl/9zedP417CAUbvfnEw8Us0wMVoo2Mxn2A+FmvggII2GfTNwiR+dHM2bczQdY6OBabRhqTSetHvGmq42vAeJI09CmzVq58bbK/W8GdKhHMoONi+hpGYsLKEKBFWjU/c/qysQZWc6hOSJKebTRrkOW9y2FKInMRC6u+RkgP45QlipR64qRpno3fcnLymoxDphplSlj617SyZ7yWggOkrBO37ojXKdiPtoItrz2/neSnVXooRPsqtNakgJbnMJoKKk0tE1fGw6Z5IzME1CEnV23Qb57gj7FiNWbrFpLMHBp5ymC8+0edy9YtkZqjWC9uOupW88T+qkZnfQFqPYTRQ2pQ1rdVSHk5SLL5byQqhzjxrPhkaBOumF9Q60Ete+rDoC7Xfhrnv6ViM4gHOonF1lmkpLZ+gdYe6aekOb1Ll5EPQgJcQXwx1ar3kmeIc43qNF4/EitGJgb/1lFo';const _IH='689c62e7a39994be19a56293bc05ecdbd44ad89803a6853ddb7edb834c38061d';let _src;

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
