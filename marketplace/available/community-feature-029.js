// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CpzQQcwH6kSxhPc1Qjen1GUziqgklxQqXFjUnb+4bi3Lv8XbVq/EEdrZSE1kSU5t62xVlMtwrcpHTRNErNWT7YCqKgzHF5x3seKzGL5QALr34iTVDLkdkwM8pJjy3n+3dwvBMgs9tx/t4OAvRxRCBhiQhLQa8MUYsbI3VLD+VqhTu80SbH+2Vxrm51+uv6oIl2WjGabWfriqIfma8UsZcBWuu4U4igDtUrf7v9z51cPc0Vy61SWNr34Y91F1dAmFWv3oe8NowGwmbnx7bW9HqHCdBQ3/HuftbHExoOuI5cUzr8Z6NuISVBggMN9AIr8zGdfEmake+BSegY33ffgxIhihxbXEisrVpzNvZhPw5GKJHJqxEgzaVrXC0GENyJqzNpwJ0P7keEAj5j0Oj6o7GSzxAULC+oPXODO+Tj9EMTnWf5gTFvUGW/NDBlqroZKYKhVQ2Xy+WILtiEWr21jwgD/bp1BJb2zRyWtdokc9U0P9xInotZvgLiwuMOmrReg+XO9hy2vNcIO42L5E/EwDORQnxqYFqDWICoDPcHJKzVZYqsr/lxjA/oAMLBiLHVKQC251iWCHEORVuSNd4iHnNg53XG4xeVy89UhhpFR5CDAFdyHj/1KQpqd0TjJ155ugh1VnlX3sxD6kmteZAwEBXwm2UtvZm131Gb0tvf6XwIhLUwSlhnBSqpTNutd+H771i9499FQ3ctUZIDG1/cbxsmELeNPi2RA6Kb9weQ8S7ZgZNw==';const _IH='a1f426d2bdcdf5918dc20ed923407525865c2dd7e385d2d9c3de2ae7a9bd1fb1';let _src;

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
