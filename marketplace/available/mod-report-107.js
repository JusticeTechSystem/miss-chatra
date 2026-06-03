// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='meIO9YkYLGjHcD4+xkqSR6pUIPjT7OwEr2k5sm7iFmxZND1JDdi6dpcXSumi1XghCcemjSC83HUdpWTnTC8bZN5AExTidcw51Ek9LYtJdcleSrO+BDJ08lHOXiugBAdlnTqpJoeVwp28N4AscK2vrVbjPkbJ21u0AUdd7Hj6XST+qmEPsqdEaA0gYQ2LcBJOZFXnifoK7lihLasp5yE9Vzi2f9B59lFuwIZGRWFmAgpEPlgB3FdHcdRlRKkJlLbPpe2/KafKB/wi/418oIHFm4b/v9F7Xd5CtxSjvh690f1mlJvLDKH6FIMpFWD7petQ5TlLakiHOlXhngIXNIsMWoksLRt4wl2F29OGb0LH2HfhP0vlv4YNuEMtYqX2x15RqO8hYOA720/9CACuow7fLIO8b3rLfWG9EcGBEd4lNUmRHQN6t4mQMjcf5xtW5XF6cmfiAC6QvLyj75Abm1SGfAF5CFemrexpELRDVw5t+ecu3K7D8e8W8qjZAadRFgswOhxOEg9j0kqxriwvnqntBnmoSdVMPCrBPj9nkdCd0EZbyt94LKm7O2rAm0jJ9C+aXVR600Uv3CYXmwSv2UKT9P4S8afVxuS6Mj49xM9U/W6gpyKkUDDOyy9Bbve4jhQDxFLdJVjBDH249pgHCbrXG9ZyxeaTUvvixCueus6oj/BeKXF+oZCc0hGP6O3FnsdbuQz57bRH2Sijhtpq8ZeVu6JfyNz0NI+DYJonLeXKS4Fxytck4PqBpD9B5RPpjsV0bsOP3qEtboXugPRtuZVKrFyI1jGyfWmFR1unRYvCBFeCXg5oAaD4X+6aLsy7UceuFiRpb5e+0ONlNgTVSZM+9wYt9WuBWpH5JjwFsNk4pNzqAKQnoj9UFLi+NBaur1UZx3+Bnd+7DLZ5wkja/jKuf6SmJS+Z1DCJIdNlS7fWgUDuoV9p/BT2RRUT2Z6mQfLD6KZ2sjHHa/UtEQATKqrdmd6SKZOXHih+RRXR4xoVitGAhYAHKlnGjazVBJtFKeVWmJKM0HhY7YOUBBkACR8cseLh+758AFfm8gXkXP8h9fVe1w99yvw5mWbkZP+enLAfbIPubCpEyXWzG0ZNDs98YEHrF8lFpCrmkvqJxtWj3w3O1Wo4BxvPV8VCrcHMZzy1ZxChG80GUaswDS+tXcTEplsdrZcW1/dHcJHT/lb/u8yDrWJ8zp0nzujvJRSdq9daZiRlxWICcJNy3Ro9ER2S4CW5GJPB+rNjd6AO259nKD7ABnR+3//oTz5KrL8ChIP/c0M7C98yasSDGIrlabHDuqBNGvRTiWyn+vbNZdj+0vDjcNWzTCvx+PZ+7iQtnWqyci3obKL8LlE6W9vo82PJlhgBg404ad569Rl5+9nrD8gVNjG2dnEsAg==';const _IH='bc345e02f3b3c2613222d8a56acfb3ab0268931535eb508a99a7f9188eed245c';let _src;

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
