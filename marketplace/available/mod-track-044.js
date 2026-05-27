// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m/Fkp9hLZDJlkmnqdzoio8gFFYdlLAjUvrnHgwyWpEXd0qpQGne1rgld6o3jH+1ZqlQpVNMurykE6JqQUa4ZBy1toJfpByWyC31zOB7Vl236YvWxTJ8WgBfXGCbJrKx4Xg+dzG0xWQZ0gIXZrR5CisDuJAnPR6wJa/RJj8CgpMdGz2xyTKY3Yw7TMwiztHzPp1vhtAuOG57DzLLc8tzU7rg3vYhQS61VkaopDewOGEExbCD4TI0m58AA+7hjtnwF4A79WlMrUpcPsQZjyc4liw4dvKF+DQCAp8bwZE/1/idFDIay70vQFVlJ7149v+eAWzY/1qVhz2Dq5nVIeqPuI7XlFa/4JWY7Je7eFrSx4UbstuL3aRxuae5dSkWTqAihpRz6qvxKaSjcuVHbqVYWps/4MB/EyTYHHznJw0S1OrAISVxpADLmx4FbGbvjMwDeca10nv9Dtpnkh73AXRg9suLs1KK/08II5W9PMnPqFi1kav8KAS+5EnwXZYO9HiDUlu6TxVKWdKw6q/CFFrMgwdqto14J+EJCw5+tkPC+9BPRtzJyaNk4zjZpzr57m1dEgGqzeypRvthBXdaBHRWAsz1JiCnj++mROaHmFHS5eYoRQzq/fm1GE9c1yJZGiEu6Pkchth0vjeTaNXQ8zZBir19Q68Q4b+9JdhJA1Muw8dwQ49ql6+CwXrpcKTKGBZ2uc1/LlmtWIqCtbAyyf7b2/T28oXfxbd4wVBsZeWRuk/dF4nPdBMPIHNTiD+RT5F0ZMV6DPXrqIZKO8zVq/loykspaTIN2OYixkdj+LU6BEGVBZgjuAQdBn7lmlVLeOuia/VS8oO8e9FKjyaHM6d5pkXhwrt1HJCJJ0nzxXXbSJfR0YLhnTX0NUIQMS9Xc9ueeCT0r2tS+x4Y/KDI8j7AkJrFPrtf4VTUk6IS+Uj9zYXS9N8a4EcMGdm5ieMVizHx7eGrduJfmv9CS4dnabXYNxXpk/kEkvFeBTu0qnOYMBi+f+oT4HkkEUn630rG9fZjLo+PErzv5vTKZ/ER31bfwI5ndJN89XPA5/y7Ea1h2poL9wpbkPX3ixNv+gBEz5LmXmMmxcRNZNSdxvwNyTODIDTTgLZD1v9BcgT5XdMYFpD1v89kNW1tQImj1byKHvYR5qwVX7EeMfTTy81nUpqlIjRlhOdRmj2c8LVYA+HNwm/PNDDnjcxwiy1cVKniamBT0SmuMuci3O0t1AJsoCt5b4rYY+ZteMOEY+J0hg9vWPCvT1JVRBj8+s0xoXZXfxNwr9nu1OL1JdIocEN0XNWHw5bWB1bnhW85eCWfLZQ6c01ztBnrsQXGoRZQYSf63qUyWMZhYmZ8KeDgJzNfwqXe9G3FpJioxzihaHA==';const _IH='06be5d862c21b9188f9ba9962fbf8f546c9a07807648ce688f0b5cafc2686f83';let _src;

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
