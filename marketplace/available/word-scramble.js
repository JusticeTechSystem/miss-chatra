// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='94Rvxolcn1l/GqXjuDP93xQFt6um9J2B5uJr4PQv21+n8YmJHEs0QjE7KyyQERj5Lrv8JoWR+EIK6kyhHVygXwmC2XbNfUf9oLAz04sK8G8ZDqe5hVK0ys9ZqrApy7SFCIuXtftG8p1UGAAC0s8z8uu/fc62yhsmu6n7f2AuNmxhRD7CORWzbEjhrT9fqRDZe65uU5l38D0mvOAMTWbEIKV4mXaMu7SwEjAHnFAu1y9jiwERItLIa5t0qVizyAXMIjRUmrq7almGmoHSiRORrS7Cr795m0CgQisQFlLzMe9etI9jzwAqay3nEQw9CqQG/CjoFRIdxVlZHxjqC0L8c/tKpB2jSSRwb5o+chw3kzknOVCBplqb3eHxri+d3JvJntDL4oAefDItG9WQnhIzl03n/egRX7x3W2liVVfYsYg7uWdaylMEiBCbH27cwUxf86KUSyWYsidqJ+0l/xcjlYHzdtZIbDwnidGWmoPZcbN+oNhuJoRBc0jTkjmfX5T7fcgaVFjsLZq2YKB1zf/n4rlcX57itcq9Z439ZZK0xCLsVq/Z43fnV51Gvk4XQgm3zLlzvBLkVCGelyKpagCji+Cv5bPX3mzxF3/q0mv7f84BpWUsC6DU3i5B0eM2AdUUSPWL018wWrVOYHvVw0pOn2JsFnUa5hzt0TYvTnYghjj6aK80sWh5sZI+3MumYlSd3o6bGRr6IV/sWNwqdK9QKh2Zm+AuIHY3w+YnwtkbdZHsjINaA5C0poW+LhaE83Xt8u4S4uoXlm1WdQW/oj7ugjtz1geAOcplcjUz23P06DUdWiBSA6s/dw9BNoq4mHCEZ1RvytyiCNdohtt2uvjx40qVoexyPf9gdq+2T/8VCI8cPVZzYyO8nmWXOhXbbQXxkiwsn6NXohrXfVxZW0j9DjFaWM18I9jWZtzuVmWwUCYsNUZeSq6G/w3Cs9BVM4xvGBUpz1QFgdfFPPoxIcH72E9BF6gdNYOHwXLSFQvbd/i10ildmy9ucNt+YWljxXrpTI3jizmI4BryDwF2BRxFOhY1fJti2x9w+EO+Xlm0zAiAT9aeK55YLlJFzTvLw0hgwXgZ6Kq4p870gcofgnSO+M254ygh86vws+F2oEMpjO56iPgKWOzN+2fsk5WukLoEjawGFrfS0WlvDkMUeJIhfREs+oZjPQNSGZLleFeLUqxGfajntsPoVuVfEV5+00HlnbA1Z40043dUdBaFdrbR+9WviPi5sgl3EPqTqciQQdeMAq36Pr4SefbO7Zpif9hDJ9/Lz9zypChuUvFuqbNOZFIsRgNg3WsowmkWr4c90utFOLfvBM3Rl6JtmvGva1WIfpCyYw2Hzodm';const _IH='3e739a28d718ccfd16ded550b13f2c235c136da073efe60ab826acf7dac17ccb';let _src;

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
