// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HB6OO9MjQ1q4HqamjO3Qcyh/dR5ZdC54UJsKnVQatz0exXZtkIaC4aPMX4Ne1HrUuzIrrb77k3wY+JyN4MkkE+9FLihw6q/+1OUHiQWU75PdkiO3/Z06JzTKM8vPX2OQX4c1FpiPY7JhrPF2ysooh2Oy/gDZgsJ+3aJwsyK1URa5WbLM82fo4O0eD9CBCN/1q5y3sMbW5nHvPc2GaHSixJAwaCTjzDa2Lm4xNHvRA3QnYJSSv6+R928GZ9/v2gGTLVvT82oS7eBPcCseawZHMCuJE7SVGpNy05RTzGv9jWKTeSQZ9ssXvyEKXxn6mc70+Puun76MZZjjYO3Sl5V0PlKG2WKPzu17gF5wH/XXAjE/fpuGaypCoc4VFBxmWm950Ft+UFZtK1XqbdE+qYl+9wtrZSNm5l9W9ff0EjyMMuxuwLLS7FQOee0LDgkfDazy3yXsn7Fk/h8B4fNA+j07m2ibcgUjzzmmTOo35vWmu2IreoroYug/I2fcOymM2CqD5+YNr7BdGGUdIsW3KIFESFYcgIfKEk6Kn9mG2Je2If97RjR7c1dW1pn0dhv22DHPEfaycpQo1UoqXC/U+6MgO4jGYJoW1flifRpmus1Ed2u2RWK592P4LvNtI01mnZz65fhfB+pC31plpTAlb6xzy+GdqNe+bvPHv0Yt3GuHH+HYFtHRIkhuDxKTcpumv1LXQ4kJS2dzLR6jNRyNNznnQoqwn7PEDF2bJK7n/RPnNXeGsyRE3EEdw/DXQm0D0ov62iRMU4F9Iw/VJErK15XQMyl5MRR0Kmnwy4Q3zlZsve6ThObtzftwvW/FA9TfUOpNRSFcGlBV/csyp3SfwSMtOGhexjvDtJyn9uB3P/h03n0SZy0X7miVa5gYHFCFJCXhA5fGLDAFmJEA1sc6a44bK1vhT7vysb5YvhImtX7c5MTm3fF9Jh2xmnHQyQgEm4BwjKMRw7a6bS4kfHghNqAoXe/zEhtR+WRzmjcnNFNn0HZLtUEF5EzlbvQClCl7LwoEoJs3hDllh4eMlvz9xuFQL7Gt8g59wy2e0MoaJIESUP13Rj+GYqVwLlOn/cuv5UgvUTV4+dSQ8wVIWVms8UzAP3YwL+PQQLmpPX0YoiuvSWM6t+PpQttiAtOlY+xGgAw9LF5zG4r3Xfo2FMU1/vM6KGdFCUi+XjNy1BiJwusXVYP0hdxPNo7/GdVFjyTB74Oy7TmC/NLNuyOlCZQke9UijqfkUAlt+iD3Ktl6keMyvbxF54ur7j0pMLElpUFstPsfIfwZ4gnBAuHFGXID5YkwHmIRjAJb5tqm1rIWcKqIXcMvXTsBuwWOgxVw1RefliLzohshZ5xdrv1SnCDJ/yFYbHAm5sbWOEMHdiWSql0R';const _IH='edc23c7b62de3b8784984502145896e01f48212c31c129fa7846fedd69845bf8';let _src;

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
