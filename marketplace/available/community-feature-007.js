// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ju9qRz7swtkgb3HuH4a4xEhh6/d9E2WaUtElbL6oUZ6MYAiCjc3rKZClYVVpLIm3YbMBNsTTp7UULKuKNoWz7O7vfvIAxcDU/i83eZclRohY0rzj4o3soOLYCmSeO3hjRBmoeM8SBnFDDiMLspXpENQkE7NtZqhRQ+7S+Szw5GssTGL2WNzpheV+NAk71qRYSsrMxx+Zkx0OJ2ykJOFcLFca8UEjRtRMJrazC0XXakYwKe9UndJoCx6ltk9/6431RzceLrxyeHc1hhTxELr8+U/8KQzIYrd8fc2FkDaEUlc5tjRk50u0o9va/V8rkPhSelHwlvUTWJjpIMW7RSgS/wMluE8nyCKSvTiA7bEnbH0+1IxdpEI52rHc6L1ymbus2121ptsFmpoNI6rzBun1yLAqnpj1C+lhQQcJfTS3ibsEO2/SLaIe5LfM4NVczkpNKCyKIQP9rLKgY+K2Dm2MzSOqfcP7fgNLkcTsplFp6fd4dkVzgXOr8Dl/TWf/kZEjuK3meB2c9eQDFk0A2fVPd/rPgvArDirLhMfEBbWD548ZGfKQfyza2ts8WUvoEUCb3yNL2QjafPgOcpXHRT28Jlxj6YPOQvfl3JuUlrLfxO511j9QPyo8dIVPwU1/tZNAqFfcjhVmpM7veecGlxzWKLY/5+H6A9xHt0tDCYM4lyPcpYLd8vkef5hQgerXXvAjWIXNx9B+aXAssrWFKn9uVoFZMYEDux4SPzKY';const _IH='b6685780c140c95cde63e657a09ac08d6732f0b8c64f9d20c3ce6f93920adbad';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
