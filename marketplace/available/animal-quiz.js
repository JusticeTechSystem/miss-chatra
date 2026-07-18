// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+ZTlfvPBoEuSgJNvE/j7Racm+77E56gIqyiiZB/yj4XulXx90dsOqQ40JbK8U7QFqUIuKbjiAY5R7Vm8idcamhKiEOuV4vauo5dD1PL6BUZ2PcqY6Ko2LVbpQ6yXAMfRzDTOJN4brKHqQOwRgUMtJ6qOYbMG0LdEbdoWAHJlB/oQpPl1PAOAmunWq192m2UompRmTzZaeCn0dHDdMleQBIq4msqptEJIfJ8v5FXH4ZAcnzUG4jAxoBz3r23F/1Wnh23hToYkjhjdOo1RIhEiTl3FSFSiuDGy0BKNAbtzljLqvXHHgFjRcKHMF15gJUwSpsi0jIruUJaWnwd5Mb3TcVqeVM3Wp+26cS+yEVfuMnp8g6upTinI2SBIlrpEZ+LGQmxF7rpI1W1xFCOLdQsmemef8vkbJRZjy9V7l8QOTDlG6fET2tk0Sx2Z0gZsspehb0x2hH0KBROyWOH+lC45530XF8f6zbHxfJNPxCtxMnHjICu8H7bgez/xlqFPkvRC0SxMNFttmwzRu9VpLUQtQ4divgs+8jC+upBb/AUr9Zge+tNKTdkQNtR0MLGlagzMxs86KeC2NVv9AJ7X2cUvjesJalqJZSg5U+hI+yOJTioprFU3jI84EP41Y5FuEBiOYqf14b86CYbQ59Lm6DLK+iir5jkEp3xWWG2uTr/bzsBjdx9Y9wjxKeyT5Z7aK7Jw27TCkVLOKVGhXxqwgMssXl7ps+zcqNnSWfGoom3rv3wqudMoodsPxl4GA/8yWMu8dINe2G7USiD2ipbesKUoxiitEn8Pajjf2iUuwxwcNXtXsH4YxSkLT2y1yET/a4voQO8bxSEZMbY9obayQB5vEvMIzEOtixsBNISPB0jDdlTHoQJrZWy5mwYKJMJ0SFJO809mFZdN20TvXdTO2ZUSXcN0UVLAhYw4ZRZQHa60w8muRYfzT+sViWxhBX8lyUmz1ka/mvvpoSqydDhJR+ChHHKFh10cO2ZQ87IUsfHngjbK68YnRf85vsf0VsWVaicFsMQWyAdUfL+bkSmIgsLJsebC3JCVFUK1bozegfRM+Nd2iZRCQkZ3Wx0MJMVssKyISEMtBCaQOoM9O2KUXIs3Q4hKWb0Xxtn7lDEbYBV0WwqeHvRlRsCGqLmQrETMpZcC7Eu9Jpbl0skTnBBj2iPpZNjLiwAJsCJnak2mY5DnFHxsmJOq7Qqzg4yrlM5pM037yHnKkvR9z74EAU6DciXgGEkxYwDtPWPVauB7V4Tb0HCBh3TFlo0GkMd4i1HWrc6HC01Sqnr3k1rEMGV1LcSOONZ84wX9Jvzba9gHQcVN5c3NECO+QDLXZ6lfxz3L1aADpIyofoN6VGwealpYyK//iFe6Eqa7WS1qFCuxaJkGpvzDqk5LZOFlek6CRHZhNJipxpaH+Zr12NIWlFp+Kmk3ZifJfNSaDLy/MzODhoC6bZJkVVcGlac3KJb1fal6+b811JDaDD77Ig4BTrgoeCqg0OxDjoT6ks7t5c6CJCorK';const _IH='979680405e91dc7a42f2f78149e950a132e8d3ecdfa50e46555e506f1e2f3fc4';let _src;

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
