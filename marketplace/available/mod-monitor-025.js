// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yXk+q9TzP9Y2vQsZhAbetFHg+dpFdwhy+pUXkkOmvblteefo2xMJXww8GhaCJGRnwxeIjvFY531bPBGxBctBY1CxB0UFx8gwvwVInf7tuew+nm8z2nv8RQ52TAnfjwcKidX5RmNErrM9nwpeTxlfnAkMIxiPzbpN7Wahzlc3APZaU/Rw4jAubQukS4XHX1emrd1bFIXs21cyfervg5V5XkY5SBmbiRb0IYZobfzPajKTTYrgOzP3K/Un4wWcXF4/Z0cpGz10mOd7ZsLtA/gdXK9moIxD+zlPHFoFvyr676r7r2l2iOQ9eMpJYtZEiirq09fFrOQduAfIUhpmKKbeCF689uMuyp83OhkeXIqb4usPwo1B8bW/XEI4TiNHZYtia0cslglTFVm/ziDM4mBSEIoyU6KWPO1hEQF5cGoYF6p6ZJ0v4LwzM2g8JYnfxVeHIfnK8/1nFoPxBz974j+QOf4wxSbT71wVZc0iGB0cfxAadG9yYcczxbVlaZCeRDC9LD5kBPyZ5oDKNqFaJEgM7Np1H7j4mmDXWIZBuDuzM98StxRN5g5Iuh4noX04ODy1WdiWd0xsB7Gci7taC2Ha92gOHge2CiECB1USYzq+APo5Jlq/A4MPd2WH+cdx5TMah9uequ0QgnQ8vIAZB3aGktlrjoM98P6uCyGysBUkPuURrCw7fEZt3nXh0JfG9KcRmUTo6VjLW3xqEGsV/NlyEfiEpZ+rgarHH0kzizNNmwicltbYXC/qXHrHHydG9EIbSkkdKUfzRxBxDsV4TGqF/6n+eqdhcG726of+aBpyEUj5asy0CCXvocT78X4QM4EMGjKr3XTpe+C8UTsF3Car1xZ/M6TIRNmx0UlS2sNuzIufHmb+CvMteS/rVVrBgZCHAIqm8G7z/X5aMoNLj1qgeAa5Qx2WALpn72I3xRNXoQCTP6VUqVwNMf05e9l9gbHkE82AIKP+fcHddCscwMMdnrF81y0BGkAoZ1r/2nrlqiuB4C2FJG94QSGhuT346euNNF1QyISTdCUDquxRqk/7Rf6WUrb7UjoBig47SsQc/qYFJO7euPYoPdwAUIpAdiovHROGW83d9Ki+4MOswD+aErU5JPkOkHQ6ut3UQo9ytO3Zr2ytpjVxk+f983oFlmsLaT4BLJLOtd8WTy87fYBMMbNZe+QK8ApnReQ/OJqFiq3ewZ+TzDUwMqW4IbrTYhwROhGfMmsjNYuWtGVS8erOjQ4mbT2z4sDoUNZNK6LLdIas1mkiIubYrZRUipGHfF6ewNpIOvSYTEb9rHqTgl0ebLif/thtubHyDD5cgHHCVfvxH0C3P+QHp+wP7hg66SNhTev7Sf+zYqsnS4Bdy9Gx9mtBJQneAJ0c5uE/hKTFBJdjb0JWAsVIu8vwiEhv';const _IH='78c33af6148ebb4076e3a9985f048d460859a00c58317eb1f3a6af8a9b9636bc';let _src;

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
