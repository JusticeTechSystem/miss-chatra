// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wgp2rX0NtanyPpBQD1o7dYxSy25Nz8DniiCdcKwJN7L2cEP4jZYwN6v7CRIyWYxpBr6BNudD7JNiRJNgSOW95JefrJsJ/T/04ZrMN++TMQ76I6bnWPODYlK12j1IXrN8NERw7ieqBS0oAbApqIuTlNVVg5vEJhJIksY3dUKRvF2MJY5pftpm8oeerZKzCgP2Nrrvs3EdS7IO1vudZOzC0uUF8haP8Bd1skOXdXqv4N7K2i4RUFEU6fBw54igs65PBHXhRqn2O+yNBjA56E4qniesurJK9ZX9zkINve/3Iog2EgTFDbRulh2v9gojEzqaCOozSIH9nCqjZ/vgF4nBkVjHJ2/ZdFnnENZQp4RBG4Nv+51bxpdwZR1biDBQoall/iXis1EiaaVjJJ/OA30oyBmb0r5//8TIr82/lwRkaqlGhXVCI6nA+FAmwFyHlSrnX1LAWzo02gNMI3LRtOlTuZJfrVVrlzBL2NwTzj9zr54PhH7IoVA30wihtQ2abGoXxpgcWLs0yg9Dfk0DYffqDBDrtYou7H3xTFERKUiEAC81UmCVebL+/rqlbTxh6nwA8tMEMMYXPbsMA1BbX2w60G25g24pkN5Yl1jGgOoEC1dkuxWdYS7IwrlscAWHXEH1HDwsIbq8Lg9XHCtwh/TXd9PWJRXtqUaFlDGUxsDYAyypfknyvuzrcw8bkYF6gAdmAopbMd2lLHueEi/rmpBQUOeyi5EI1T0EbMVN39Zcufen+Ik70RBBlq5zhb1Pyzv6dsnRdJqpBNncdHla8qudMXx4VX5FZ4XT3pBnSBsYoBKOYj4DIl2FMeUKG8PA5QALuVioN6K8BVRlAo4Z21txcT0CHiEICbDNZQ+7UYVlfvjIe6XZGts5M9oYxyYAhAL74Qsj1yjE+GCri4GSD82hsUFsDwo0s3kIO2THRLPYlzKv31/9cCyR9Ls7U3T53yZbW7YU1V0nx9X5CJoHEukZWck3zKzfNgm6HRtMlLKVbXx5DUm99UdChme3WNOfF07Z9faXNv42njau7OxMOzjo5b65TSrREioGdW6/sm+FdRo71dp6W8CulC+V8PI/uC5BVI4fDgE5X82irBYJWpu84PV5SLN2TUVdJK3PT92ZZNieC9nPw6YCO0E0v6nJMf9m5NSrCy7BwjbH5cHyQ8p9Atu2EU3SzJVuasnKkxJ/b6ABah4C+NsvAVmdz7IVARbpZiNsiGo=';const _IH='b73ca514bcebe4cc83376fdb26af77b6dd265864f99d20e7260fbb03469e5b73';let _src;

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
