// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CHzrl0EwdWCTPjTJAZ2CS7SwUoojXlVnWp0WeOzeiGRYPkM5HfzQCHOLIynpTGg3h2thuGCvy7LD6yRTeKCMmPs6UKVwvMbDgnfSb/A1J/r2ZqQ3ameheH0pzAXC6Rm0mtrLAHncMvJYx+02VuQanQtCeSCyYC7gL/Y5MW+19K8WS7LA24kXs4s/fikJkPGMvYwaKbKxB5XyMea8wWjH0hStOO3dIsqbmBClVcQMRJNKyPDpOwWtrDze8Q7Xo2boppJEBLsGV7MZM5uuSgrCyQjmp5pO/QnMieZDy4UV0B7dKyvlJuUPZsqRCnsgoAYFD+e9Z6M5iTbKVnQw4JKB8o57ITZ63syywEscm+AfSt4UzZ7VdoSgP7WgPQIT4B3FgxQ68QShJNojrrJFb2ztLPVQEbEkACaYZ4jDs4cNhu7yomGdahU4E7sL9cutvGcIQm5jTRSoTtaOOyp5HB3d0TdheerdUsH012BAXyNm7kvLBy01FfP2KGGctwCT8g3wYND5JFKHVDQU6nbkcpJPtKPRRIiV9ypkRnQSKehyv4SNlgDM9sWdEZaI5zUu/UIJZB+CujKu5daj68Ke9CCaNHFmK0X7OQ9s2w33KvnqkYwh2rx9/v9bohC9qe8AyEqiM/7zYFoyrh3Bz7KVarS+G8DOFNROZYbpbP92eiuj/3MnMQdkXCC1OO471YyfHVgLBGZAAc+fFKz/q9spmYpyPg1mMSxuXLwP7PamJs8WkmO/xc4r/QWn05u/1o/WjThrD9Q6VH9igN7MU9pNwlIXvwoRSXCK2yl4g9bw6QVkyCXE1QThIqX0k6I2IV91ePjHbSXcmxt1DjmZQgCpP2rGavGSeGQHlbpVdQjtZYROMgzQdPczjCdv2NcjFSmfrphjCjDEb+qc2QoTLmtyPiAes22KbU7cC0mxxSJHkUP1QDklT8Ujmsa4uWQXJOI1DSd/eicNANpvhlqzaaOuTpCTlc33/HbV79tZKKKyn99aw6SoznK1rou/qeJZE01kEI40fJJDcFi6sQZ6DbittRkC0+Ko2XyfCEbCwGc1OPb2lYO2soP4vtEkqB4lzHIIGmA9NZLwEje0EwHt6liX9pq305TOOFdp5imF0qbR0m9HOKIK8xW3uBQFe5PDVwp9oy3h3GTqMjluAe42aYS3NHeG43Vp2hJnP0yWADrtO5BwvUQB/MwK357eCrvznIEyPm3z+BC5qlTY5LYRqYrl/XxgXgsf6Li49e1L/ysqCY5IFkJNkHYlpj2EzzpF3SjU22HBJQevHyeZ8uxcV8Ay4eftCwh6DSsGZH2j7loANxCDsRgXa/r8j4P/VEa704b7Miz9vX+B74UWMZZtFyUMyXPNyHom/sjLwaonS7CaIzwdr4jF4S59W71woOt9saawjMbn/74f2xNrdK6EQhARQrtR2PxoSyTqkE0dDKVo2nqvvMGTV11JzwOJRVCCzvFvkJGrEYKq04wKfNBoM4eWlWIt845G/zlP07J7HW27tCPWFkpsVdHTQBnMIe95T0gO2fGLFq2gY7di7O/54x81JMDZwHxb/cXw3bfM+NF44BrfqCCsmY0noTPM/98XRmV6Am3h8PJbbR3siFUM9stjmNBIUM1HBIAlJ9TJyOdxbFUO8AXKprCPp/DTEBStLORNq0DmLTZiKoxGt5j4zP1kgFwV9+lmlPlJO34sP715GZXnmQz4jg==';const _IH='25fe9e2b10b7bed4123e4b8bbf5de1643a9d98d6e79b7d89695633cf98389935';let _src;

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
