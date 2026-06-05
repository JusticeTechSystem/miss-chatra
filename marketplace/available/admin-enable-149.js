// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wjKj4iukCORsDWn2MpLjfX7+rnzGIjirgHU1TJoQKH4yJ4HbITqgpskjUXvaAZhlWiT6rXCDV2UDvqF34MWXGzeNGg8RXwY3xjjUeOegQYCKNHYdO33C3+PSTs6hQjqUMV70OnmBZz5fe49+cHkag/R/8iytbjohihYNdu3AKUmKVTzFazroMt08h6z3tmpZWsYtIh7CzhBfBFzHzU9YJqet16EROj9umsmuw9s89lGIjwwDNcNqi3odCezRkoDFr+Ml31jmYbcdQs6/ApeCKjGpfYR/PmacnzGqkPBbFI0l7vdFpebiEJ67NmW1OIldJQ8wpF5h02OV+V+qBXY/+fvb4W2DqXxhxv0D6RsxEpE9QmcqEBak/5o7d+b7VHWJeayygGfq6MGVQ8kuqIiYx6qX4Bv8Y4utYNfgnu3jpI6GFNMYBm4X7M4ZmL+Eu0fN2LA+Nqnhb2lmH27elW2Te9noTUx8GEb9mqRDBGTQSKsaeLgb8BKFfHX/bSRMLFWBpVtDQ5OuXI5mf7Is0c7rTJDo0p4a/CxtmNsrJYWPXyz/RGPfpGMLcftc82Fzk543QxxcnRi3plXdFjsyfpCyjruxU9JlgdctjHCmBeAAqANfzGHRY0tG6kZyvjb8H9YtRXvgql8QIIw1ORAmAXXVwA3NZBUoE269KY/S62B4cL4KEzUUqLQt4tpD9YVeCuhjYhspdqQIX3edDm6rlKh7Jz21dXZ0AaQlkh1BidTPFKGWTSral91CWjwGwU25LCYr7NyZFr4DG+UA7R9Z8ACVB+/AzzeGAq/zhP9JjMNJnQQXlZcfDa3LHz8cQINoq7Es48mF9VshLdiKdaG8bFZIJEzj2ieLo7Twty7FEFKBkHopMocAG3zJHhUyG8rjHXh0TGKY2Ff4jbjU1p1qKj63NZnqSjeJeXrL5K6McK9xSNdWD60l6dEOKPaNqOa1KlKDk2ZhPHpuRM9CQXvUKqbtSRMOb/j0ZJ7eLKuMtXT1BsldYzbdnhF4Xzf5EaR/X/mfIQ==';const _IH='abb1eff7c7e1e717c739b8a342f782c1a495af1cec315fa946202cbe19ad4a1b';let _src;

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
