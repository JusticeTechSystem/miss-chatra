// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bX9SKBoLBaXXpEezlY/gWzfF2vXyfXHzmg9/wbpeB3aYxgCWSBQ4m+BV8qKqV68lCYOVu2qzcjFTbabr0wEZqAeDZqac0Pot4aGxKBpaXBXjTLW95pOaeFFE/5m2wHHCmLPphbW/P/vK8ovcS24dCQhprGpUAi3p0deiDNztXUuFra2sDGNg2MNl9brV/IHsFpjXe62xfHABPT+9K+30gak08M1R5XIURGtqAICnJtj8Lu5+WoEwm0FLUqpdyWarFCyYS5ceKmPzGQ3de2ac1YuX4+/6BzQxZQuBBPGL1oYeCHRS2dNjcrgfU94T0MG6tL2F12V1CYopf0KkSzSo6vkyUf0pTt/+xbnZrgcZdLQPPsS4UpjhVM9xuJBR3MC3k9HgZf9iL2LpDvRhaS21Po1eFx1bzCFsFs3tjdqPpGLIlmjXNW9W3Co/y4bngByMvAogJVqCx7QhKqKO763bEHhpCBLakqOHRddDlTvqoa4Y2OwGbVtABwnIEbN68oSy0cC+S4fUXfda3tB2EVY0TbQlOg2wlyU6Q42P8/FlrF54Uz5rXai0d9ZXFhAHDI68fJJvVw6EGJIiE/XV6wRGo2VCwN8CMrSF9wSiy126tAYwYarYAwz2k2clnTDsBQ9k4WHe1opk0nDRYNKCK7VhEFUbaWUeBJ1a+Rb8gu7AhjYwGEu0oTeQCICH7jtWM0vzi9Zaq0cUHZt5tcGWL0ZdhBtc22rc4JydIkFN8Tg7AAXwbofPnUDiCZOGn4C5XkojK3h4x7Pqveo1mSNjdvFxdyvnnjwK3Fjge99rfG3SbEl7LoUiPeOVF3jvZKQSmreGJst5nIJPYggHVRfHE7YkalPMslOstVLVyAD342Thiy4fWnTqfr33vJNdPf77q42GsU6rzGZpkQKBagLKUyOWhhnTR0tX5n6hNU+1qxjw3aOrvpmtE0i6FZFPZN7n8ULywGJvfPO1yB5XZMXszbcn5ZrMCxuyLdbon5ImKZAxgib5JSX/PEdkfy0ukKiKC9/8zGhaMFqzXqX+i+CGaDCytMTe9tThv2zt4k4+Cp7sC/qda9CPM44x7T+HvwqzCniX49+DNqRjEM8Osty5GFByIrblBQ2hUZAInRTYZFPovwnDK+wck4HOPw11UcutYBmppB4PY07zVBVUMbkJz2OnjXCSDS14K+nIS02q3AHj2e9XrrR9mxroAwdkhG4p1fKSzO7oKH/IjUsW9vKQK6vlWhM0ZJl/iX9KcR4S3N0lgQ/2sLQbWYi6KJ0qCFaSuIAqt5lq5/f6EkY81fGjp61tCsAkEFzC4qVcPe6ycgcCZSFC3f3zQaMRE28JAx3DHd/giNksBaULJ6JOvP65ZgL6LS3JgaEeetZKoTztwvY6KXvLKY+4ehe1ni9B0u99kcyAXuH8pv8kVo5c7J758Z2XpUKCAjy/pShjlb5HLwOfh2RfnedFdqB/ItUGeQXVSZeLj3sQ+vBRR7yvpcPnnlmNQaFbAsxtbzOuU3mzo0JHx8QxDreA+ZUECWXkNgzEmEIFnGfjmkUlfpNcb1pf7+H6HRb2gspHHaNaEm+OGgp/gYouvETR+zFrt9FuioOwI6SvbVMSpZE=';const _IH='6ce27570cd909b90501f552eb2768fc12acf3d511555c6850865f414a934023d';let _src;

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
