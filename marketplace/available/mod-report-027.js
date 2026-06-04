// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p5oC+9GZ3xYgwtfeKLVlMRJkfZfWBstLylyQtyXmBflV3BPbdfw98CMuECcqXXnHLr2fYcctpqoPtP67BTvIniHHtkabXYUhg9yOF8VdIJ2PNZYKSAaY1zPRYbQ2+/ZQJJPGH/90faJ2aE2eI4WfwYWiPzmuXlX79L9v+8Y+2pnQb4ZfQ23A15ppdUMXTz3XoPZOxZOT06jgbDBU5rD7JQH0yoUeRY0jbRK6dbD5C+EEGI8oTYtkmwSOItzhOqgBo+XJ/ygixxinvgm9RmMarDKAAwi5w1Zg4nUmhu/zdhpQBHOcTUKZATmsQnQnfjwjDw/8Xn9s5HJEM5BeiGNWmFUQqzUs6YPRLVV05K1h9N6Qypx7rGfBzOiL5VKyujtkFWmd//zzprqrIibf0d9ufKJsOlW8UAk10JYFR0E5Pzn2DYpH9W7D5GCv/jshEZIHY2j+DEYw+b3gwJmgvbJYZBarmCf3n+F5mH6+j7xQ1i94OLpr8PRBKl/3cDHqSZEAS23RYt+rI8CpRoMoMtNe3yO/nusMtlLEXqy/JvzuJnyCFmvzDyHfECx/gH3vYWbd3S1GiiBqmQbGSulUlCh7MpDA16v7/JlrGK2QW6L3DztR6JGtWjcCYPXzlCKdgPuIBAeV8v7PHZU7f6Up3g9MNZdG5+cuv19Lq2zFzsYQf3eOtrILawiJ5FsG/pWDnpgFw3bUsiu7uQAlkmfKZ9UUvNcFL3f9bQcQpz227CrZHIY6F+6v0BtylmngBD4Y62HRjSCDiyBA8w49aVTkOyJx4f8PXkrEknbm9PAfPirmfs2QoM8gmYaoLJ4aeafXnR5qMn3Y7JVJQIvRosPJnLKxA865ZjIL1EGF9xFdhQ7qDMS4/iDjNR9g8vTJEI468wKGdLtd+Q9MGPBdWJTpCLAeghyEvAb0oua5ynnN10g80uiMRautve5Ks5LtS3aayPy82lDtfh/Lma4Q+CPrY9vMd2akVIkcqRUtQMc5IF4B8mssWEzN6tOqW6b2XeKFqkCo9JOuN9FbDtos3t6rbrQFUGY+Y+gKAGDRS73y0GWUsjdx95b6794iPQDTPDEHoqOj/WqbDj64JWkVFsQg4NCLjOxucP81S/3BTOa828G7zKEtht5LXaG/9drs7st5cK/agjCtQBiw6fYT5+QEOspU4YbZl0TFn4su4VzQbu3c+5+BsT0ToBV226OKxLWvgKUpxHAgNseesxleqKWBj6cQ2qNSq0NijSjvvAuJpg/+Tck2Gcjmch9mZl2ScKLUwDWZdqMkfGpheo1dJIcjq+F1LqvbLAq1BgybQi/WvGViul+5vUD6qPe0Gdjmz+1lzgungdEu1iwK+gnEB4VD/lo39yTSfEspBzk2/Z034G2eVxjHjus=';const _IH='7959728fb74687ab37c4923bee9329f61d6e22aee880d26666d058c5c971cd66';let _src;

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
