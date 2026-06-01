// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ISemWhYEmVNpxrbvaB6vvkapiJxXvIynYc5sTRpNBl/qcjIW76a9Or1DUtNnEvH7L369+PXWP+7ULKk/6PgLovjskSvuRKgnGUfQ1lqKqP+n8p3zrcL9MWj/3jCkHWnmzRiP+W2l1i6gmWU/EOaEhnQcMSSJRBvHA7jk0IzCh7izjM2SwS7cOuo4aOL9E1vb3+SLVNAIYa3ondCPnFr+Sr3RYPAwV2dC8gX3DRWItY+c5NpDLj/rn3rS8OiR1qVVh0Lr+z1ELzSZwWBl1eIE3s4ygP7eRjvYe6pYeg2x4SoSdgTmqitBrEM1OrmbzwSZ5+5FHeUz/IQIcnJUbJF0q/O+byUbNHXjn5AdkmcnxWwEev4Ghs+5jCEVLIvciJfatR6mqV35iJG3Su3gSKcZr1Vm95gj+RAZ6A0SEjomW4fUcIsX4+z31UZAAiQUXgl066jEWruBQyD1XcJ+WA1ZtMDSiMkeO6lxA6xn3YsX9oHnI+8BY6eVcxUHyFKApqnNTZA/rNohLzHxP7DtChfQ5S7J7rq5TI0AwzbcgesOWgtAmAIuVA2/kVMUGD+KR2CtagNpYVCxWGZlhGlauyDjb849Vpnr/K9FgO7KgNe0wlAf49l2Og0CiCTR6km+Rnk6tkF+3v6rOjOma+cBOr/8KGk4UCgP4rSuSYUaKMNRvQEncXRKrbK+W/Tj3zRgnpsFLr9w6FDCLBBbgSK0igxUTgypCzxMg7PAiocPt4HAdcve+IqkskhdEhENgMN0TViwAgoEIaKzYlTrBmb1V7Ic/Gd/fLxSHbwJbRxeIq+YrKMLJ+1h2lS0zH1kz8C0Jh18W1EB3Hro3icaVkbCYhtp1G0LKigjmbB6jmoQ6m+t/q0nltB3mnyQ4vEIwXjGg6IkOZqDlFbY20QleJfGoSsPM7kwQANVV86YMPFuNliglN8ZKpgPi1O6trWH4q5YsbtQRMYOv7GcJbTs/mR4Tm6vw3mN3V8VI09g2FtJPQlwyrlR4c8+Ppb3HYM1n0PsrjNEbcWkkmg9wsW04TDHJx';const _IH='e6cab333b62198f3c9f91c3d198ea023da00dd32fc8dba452dc6a536e13db000';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
