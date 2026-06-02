// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tI53oF9RD1M9lsmlDKoHt3Zn3uVdOURUcmu3Cw3Kzmm8XmhLAgaptJnOe4L82oFWDx2kRUZfPYiiSlpWLoQhictwl9zRyriidMgOjLzh4lEwFahQ1PQgBgw2sDHuFp15yQ2B4hTBKbpkRfiVlMjtyynK3i0WM48VuDQQDz8YyWLABl1qLIvXMVfVC9+iaB5QIBK6M4tKeduLm+/j7cN6K14xq4jbFn8j8qIVK8Em9tGJu8DT2Ybo/IbSJ0hIfh60HqJp4WQ0oPKmQTGcFAaEw7ao/lrB0Qea9x2x3iO54PbcbemWECOyEuGzMi9jCvRtZdPMzCvV9zJYjmPgTVunbkhVo03Sgf47eMkmw/jOHmni/TDxTkwcGPRfpl7bfIkPUTh2n5Aw8ws05Ve+mCld8f2Il5oNhvzPrAvP7aS7rmQU0UGPxttshGWr52vbFg2bXNEyzIw/q39Wi0BvxUJMrajnDM5uXK9XP6arpzWPbmwjYVp8OXSKt82WGcOhEk3GsgZQbW+clYmRcnYe5d+xQOfKdmZmCcrAlzDLHdJyFRjfXHJbAosSU5ymE/54U0FI77oH7AeJIUR0/V2MWkwzWFhb8sEvTVOXrcWS9aB46dgZGRWAaU8hBff1yND0B2UwUz5v0aVKT2pApD+aJGUg5KUx7ghnJVRi75t+vUj9Drq2qHYkl2AMwAvaDJ4luNL2c9keHXl9IdzdFUF0Xnm/2QOx2zA4HfF4bNrA16u1SdvmZcvkg77t4j4BwI8Xxoh15RPnoNLxjq4VuDy5/tMamcDNoCC1OSeVp+OIgaqqJGSirBXClS7Sz/4+mzBbu8K35jgC4maoIelMmL8UbipJHM/WgxFSSltTviHzeG2cV3UbeWDiqCpRr33p9BBIjF45kqfvjTR5qXEdDTiWqELMUDcEnPvled/qM+L4gZFLvq/amdzyUE9vtToGaCdV7EpgQHKvYg261Cyt7mY+ZHG/DQiuY+JXT8oNiUNtDX6XNzk1zcCkfKeqVLLjokOyTWkaW00EVPTK1wIOGDqwtA67Z9G1htu5KXo4gLvE6hWPsgxZC+qr34om2vv04USO5SKV4fW/7dOpQNBsDJWf7pDc8x3dPsgC5TNzyYOUljHw8blFIjM6A74csquzCxYEEbrAj0ZyeW4f9H8gnrEkVWOIkPMXFw+vnASAXDa/z9SYSi/1V15IKWFQHqIE9+O30su6fihoeeptFai7MnoRdjBoKK+Xvm1BVdeIfEU3AB/I/5Y9nGOX3v21zdjDWpJwtFnW9lMKBDnn0Uuosa0H31pP9DB0qxL9hLGqDWuzAQdr2acgrw0klplQ9E/MRTGcmswCVp0aJEM8uHqWe02hKvOfjzlJ0ghjiAnE4AqEYYP+wmDDfrt7wmWk/JAB362AN6Ij0A3UjL6SeQgqjjZ74qojJfhH0f33gGamcXFN0NpZ1cK67tA080d5aOVZj4lrNwkF6wZuC/WhDuiGpkJGKV1V6xdGrRGa/sTW5zQeJm1cBi6FYuMAbfMaLdRCxejabntl+cwUpxzjt0LIsrXNbXK/cEPEnDTnzNTwLLJhYX9ZfMAb3bJ4kQJsI0YYnCCiQi23GQhCmfWwCtfvpi5TcuFoCjSMP1UbSpK9hc5AdZ6IUQjHw+RRMeMI034WY1AHSbS4qou+2GglTyyj+1bqwzY8Kmtobo4JD25BN5pHhTCC7+lKTdScbLGRCLfSwifRImc/Kmcqg0vhh7wjxbaBENflcN7VZQZ5';const _IH='08168162f023bf466df57726edbc7b5d921d270b1e77e057e3b8227c65400417';let _src;

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
