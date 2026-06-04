// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='swOpT5SgJP8p4x7mZoHySn+5uW3ToospXjqUXf66bwK1MgOi2Tyc3syDZU3MIUHGUfiw3BybVsdbysp/eRKd/cTgRnqVSSxZN3isutsuSBRtPQD7dpVWCfZrwhi6Gw7QQcQ+QudDB/6g/vluh8eoz1vMWHS5HL6d9erHCPWHtWkJrzhyH/L3VTRO51985ZNfN4Q6mOnzb1M5W0TZuy3mOjt65gwzW6+AMLnWOwaOGO57KsUdfZuIftvMkPw3yaRVQ/jGkKyP93WktFV0zaVvD4DDWFOsT/fk/E6RZa/YSSXyb7eEU8Q5xHe6eIb3Xb8grZ0y6Csy9kJ+7LmAjQ+inbeUb9AwVWfGDrhNR2AYWlRpZDTvxXOF8yXm7RuGGv1b9DlCD0VBPDKbdaGDYmzCTtEtKbfGp4N93oLRHVuaVuj1061E5PS8McoHE6V8KSlfsm0SGE/4OYq38dYkN2O0jX+c/ZaAbSJchn0h21rVS9IUG/Bgp2XfGWk3d+mOUVgnrM5pRJGVqWHjjVHzgABXNAQ0/fGm/+sgzwyQCuCgDIBeytsOtEaYAqpvd7mROaQnuXDkteKUg8No6YUkyzh4KFBIECQWwGBQTY2H+e6ydP65MKGVFDwHo75abjrAqlnzFNNpLhjZ3ywKCJBxjhPkQCSiCEtLWuYQwAxwmQNBNA+04DnsLDbuqxUflxZdACbHhFK6kdb2UkOu4QGSa2nSD9BbNzOftDsF1n3wqkChR40OSUnDV48kcVAsPBmMNn46w++j1UD2LPyX5mEdeRuqCAQaGpMHHw6zPrCYNHgcY/ErYkAJVweT47SwB5uNZB0gWrqzWVedjS83lbwCWcxf5l4S6NhgmRbwoIwuwxsPYW7MfpKSTK9DyJle0HU7A/AxfY1h/ZzZdF3AIW5dOTIpjGnZ+mRQoN0aq7tMNQqiUIg5BQzBtbHmuxT2YIXzYCQk1HQDQQCZglMAVdo/AfywTEKEck3FIq1G12QlZYOTM6YPL4ZirDq5Iykfogg9hmWk//XKuZc5b3B1o7U+JSLJsZnXkp4lZ0FYJOpgqInxOP/qseZR9bVqXz+JtOIRkMcYnu1cZi26kKYv+HSw/ABGpe5sQL/WAzSh9SvG77Oft2T6PTWLuof80P10KUyfe6B0HtUKy3sjIhyhSESNecI62UvtjsDYFYKxCcN6Ogvf4g1B16OhfpIGwY4+rX1b7fsH/A8mbPivjl1BOwj07PIHtRlLQhr9QWwAhXeeshat3RPrQ1VODUVMl1kCzNDzi3mFC+EuBmopJu00jwiqcQaP3iOpRmx7xUqDMOYxqeZVKsX9L255Ydc+meogjJNZoTDB5cvB0WcJIZm04F2dR3vsAklvHdTLOXodRw==';const _IH='5ab3f8fa43fa84a511a6a4fa1296db0c988d7a466fc9acc7ea92e1932fca2422';let _src;

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
