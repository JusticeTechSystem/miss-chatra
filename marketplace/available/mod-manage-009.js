// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwhUvz1E0vK7lNNEOZa9fRS3QbHc6CFL/SDOtdjgBAcHWGi4yE2rZcCqz/SxRMESXCU4thsNhUO0435bryZkLg+fVVlteq4X5IIUCSiQJdzcZ+ulIknpXf3XXHRwrekXtuupZ2ucHkuKYvC345O4rxoRDYtYVDYA7lBS3z6zgcduStwJFWMNdm81/hWpLkqFzrlG0fjbqI7BGDhmILRUM9SWdwoWuGwBqUI5sxG6LZCROelf9iPPGjG4eBLp60YBoQyyIjpFU69JRjjNZbMyc+U66WjW3Yn7a03E+fBdRSz/XOTN4YinRadQa8nKgo4Uf1urAEAblMrV8biKkgeJgtBhaErvM5GWGAerjhhwmyAtoMYQEWGNYWWF37bBx0sOMMetgjAhMzLfXlOMSnYVfGocVXnNkSsB8iFGIPHpJzuD3YmlrVEiCMSMoVVmMPC92LMqEUPQbxYTIWs7e1YcZPWe2KB/CVdd/BpWgv5hNkLREnIiR/LfmsvLVjezNu6kVY40r27DeGf6Zgpn3+yZIZOeHZTPQd2t4GEzuQJUW6NxPPoJVNdzcjWc4CvSkWk5+mWwKcuer4VeHQZIh32P2QuiDtbwbooOvCssn18wl92kF5Pum+XvAnLr7qHTDscMmP5AsyXcfMO9YyaPDcMaOcmiorjXSVco1gNhsBAktA9aHL/ukR8D3MHbTfxPjTdfFmvKyMKhixqq77S1Rwgd0bcwD55omAx9si7LapsT/jRFxjusO/Ou0lv7dvO3Hf7VH0bdU1B+URhxnlDnUOLujZA6zhkkABP31ToYsEkkUmC8qbVc9310zNcIPRo058z6WGqwrvjoPt1uf54HvrrSMUS31j4bTV8GaOlqENAJkUtBkGvwq0D0GdmBFq+Otz87//ZEoV6RRqimOBkY9c4/ETZglHB43WlNQ6Uu0hMg4JGzgSKsTBEGscMXM0LpTbF8GOaes1QEszcXkZlZmpcmWpQnWOXlgnKOEDFhQwTAwStJzGP9zNdIZ64hy1gFQelx2UpPCpYCwqMRMwkk5XHSHFD9Xi8oWkD7jR7U0lyei0oy7wwJUDvmOPOIFWWs/nqZtXCvc9jrigDsw0ZVRevatSmTzhh9rXNC1+rv2kBX9Sfp4OTJ/ilEa2DDQokmUNXJqhyZm8hghewjxYg8YCe8zTJCWFwRUB2YLOBF/toWGtfpA9dWQVSZ+NdGfAzWrUBQigyPI5VdIyV7HJflva+mdd6Rwi/nS9OwBdPTfPPh254Xo7FZCjNKhKYHyFwMhY7ILFZxyzBp+MBQjYvha7ZOdZi+1qTwKE6kbLV/U7jaKCBl7hFf3Shv+UwInbZ8ccxyoWwG1ah6tn40wVVK2d0UTD2eI1Abn9Evsgf+RK1rw=';const _IH='005f91a244dedd0104707712e8845aa68444ffa3688f784447a2563937441aea';let _src;

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
