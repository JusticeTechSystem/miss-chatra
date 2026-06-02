// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AKYdAHe1MzMyuja5aLtSSBKPv36rRwYiSBLzba2F+Sq8v4Y9XEy365iDlAg04+8irmnjxEMYlokgRw6eDdYbL9tt6Qj97wVJcanp/lTHLHz3QgR3aSeqC8zn6Vy187S1bLtrTOFuAxhkSjQGewkjblUk0ldzAv7qQ1/tRXqLgzQ7RsTbC/YxXE0GGtWp3+ekiNrUvGLu9AsAGbOZInx0vPnZYVbWntabV6i+BhCEZO8vQno4Mtbwe+YOiHYt+zzYR/Z/+as3z5Oy0vWcgSz1gyOxqJzkte4VMoRS23ZwHX7csWA8dF65OjW3HOzKt/3isOT/LPuJQ+u7y80lB0iScRVp4D7Xtivnrc+k+TE3fehKo5mmVKdBUg/g7fLgz+AtHVKmCKT4vxnajL7HzUXnr0OPwxB75I4H6e1svAOm6QWmLK5JC3Jt7tcazJDIjmnxHbOTrLO2nZ/TC08AkevpVLZqf6m1misOMcLRxXgJGKro0IoLNDdX6pqHgxStJpd6nO94DzVOM09MyFy1gDYmnB/9sro/5XnW+t+k8JLJkMwY7GkY+HZ75AZff+cedu5tHJaEEFR7s5mgLQUmRnE1NTvteXWKj71/7AeVb2PHnON4BceLlLMv2P6yPJahQ5tEM+kGzJADNA4sImxaJicgEeT3omsAnwM/MS7jZoh2Ojob3KuGruLOh1/QOPrzZuX9iElPUSjfU8a5k15WEUIpzUJXa6EVYTAbVYWucl4yBQguYqAZ9s6qWH3RIdOKDnN8QhxFE+IlooSCKdoMY6vQRoa8Q8ziVcNO6fcHznjCTGS2Qz7WA51T8+z8lo9TW+ogYX1xaygp6ODMDCtFvgfheL16++iI9Ta0BocnkVYYQLYiCfvwNJNvBEc7OzGv1M0ssML+q8nhghpcORfmVuZoD6SoVFYKDUwzY1fhEkbyRcntRJ6+kUBFDoMZTVQUGvuB0R3A7IpyihuCDRNyY7Tm38GLnmLRdJqtpEAsz4eMRvo8qCu2hP3WoZvzjS+O4QuZIC9NxZ9MqSDfkpJzDxPtKZGN1dGQ8HWgZGt5YXDllTQmPfQKTXmB00/4vXjbw1sO8iHXxf54Zjbw8IZz/NE=';const _IH='76fd623b9bf12133a2f8b823fd964eec53b4fc2310870606e5b6755fc028bcae';let _src;

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
