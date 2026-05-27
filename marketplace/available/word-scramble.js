// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vshwa+fvCTyBzK9r8hXbeliUqj7mPn5kSce1+5sRo4Q96N4Y2EqyMGsEQJXwWAQvcstohIshIBLP2Tre88PfOcoKvJHUoTm+NrN0wt3rdylzK8s8EsFiO7+VXezNt2kPo4b9ZdxOQF0OXViCR9V4n8KBd4emrxr/3M1Om4VQ+HaYbo7BzUXobDS9wKLFsjA6ttndjqwHQRcOQvYlZtjG0/iTETSFhwWWtfhRzVpxtI7NB1mANEovRPyCJW+6LYeoOYMF3ivsSf5/mI5HIBqUnJjBXbGUb2UCXqY+tQDNplHhbqj0G2YfG5GBNJYNHeRNwj4C2JC4E/D7VOjmnRJpMkVBnHWdOVkN7QDHOBhJCt+SG99GxO3HUGArGFv42Dq1OGM695Y0Jdvdxnr3HR+eEkTaYs3aExzlcYergE4ZI4har9Y7oWKB+wDzu4cgDq5fYn8/gHNV6MhRe6Sqvw77cInkAoVRHMErFOETfp8tIMq08iftGQRPDEptgOjda8ljayKs71XFtpeIl/pQP0V8flSsN5AGhEI80KPtfuRilyhvmIfcrJNecK7kYN+9c5ZJk8/G/NzxTkTiQa5aFzU7upcgD32nugo5lLzZa5ce8AVhzfECq/ipMIX4xoZAUePTwC9Cu2ZOeposherpmINs57oyhA9dFSxhvgCJHdCKq8JbI759sQFdK2c9sNoGrK2KpIk1Dw6K9kfgI4wO9GKOOWhJRHA61IOxr8n32Xs5ty4lhQIPAI0SHa3OptGhDCU/0eLiIhYyQCIv8SZeV7Il6xXyzAe3Xnq0Q+Y4Bok3Ct3VjCKQsBK7D77RsHExHuIaudxuHAy7R+KfqyXsKZRk1QU+o4u4GVDucLZbZP9XE3G+6XmEoxQH4986N+o90JxUVyuBZJI718adwLWveOg6jakIO58VgtS3N9tweHuvk9Fg4yUOscm4EIXb/4TGt2pOBmWndCG9uywdDFBA4zDWZHxPlPfZowfMOoYuB23y54R6fv2MzY4KJwEbJl93PyJU0aWZL6RjqCwSjdXobxoUTdxkkaH/KH6zuPLMryzrNrtTaOEZe+YXFdUja6ZGCJGa67HzZ75s7vM4kD25BktNz2KmSouXgP9LKa64Zb5JRh+5BzNmjzVYDxnnBKUi3abNnKjfMInL+XxAFReksSYBYp3B80qSCHh5ZKhIqYmeQdfxTRVZXatHygIDXE2E9c2LQfaXJU5Nbm3VtacQ7UNXYYWOT0tR80Zx5Uzdb1lB6lEBtZjZ4LrG1nwymAPcVaxvTnmnVEV65bsmZCclEPjfnEl/+x+ZWrUkSXMOrV3ElrBK6pI+PWwvJvHdI0+pDqyBkLB1fr1jPhqo';const _IH='dbe582eeb94cf536c3b9ff745cde0b655c411ff36bc04033a3acaf9467a176ca';let _src;

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
