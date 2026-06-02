// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3mmFLHzblBCfHA86QzrL3v8uoYDF6VBl1yIp62wE/pF/EOeNWfwrM4dFfOyH/+B63lZs4RbxJI1FHcsUMswuF6aWKhGksbfnYgT8ZSFMbVpGBa8vH4tpmlEZUx1u+giVztszWNi3hcPllSOiUOkiei0RnuZxjtYowK7f7jT4t2iHUGvjUV57Rj7arUOD2p5UAvlzjZkjtiCnxJmvDt4AONhi0R+9CYT0V1+TH2XhP3mYNPO/bel63CcNpPReSPyTKC3ILhCCygjkVjAYsJXgHSw+LVl+FjkipudweYt1bif3lGNZlfxo9NBNDwmklqGUkXYHRRI30YVYa05uorzsWaWWVzwAWWqyuUK27TnAHjjNjFb1FHrytGJyvGd++efPrPVOcDfVKQ/9foIykKUm6TYcUMAxMRxXP0fKeoPTuvv89FvsmiRElX3Pk0MvNriY7H6mbloZfl1oBZ/JITUhq5w+Aj68AmjQb1CcKjC9/ZZMOLs1juUfEAN+Z7d9cC51999Owc9Ls++hYLC+pDNXlhfRLka7hhkfKRyoHAqq0et/IsGe95yqbUG2RI0Ci+CO/FsM0H3YO6VLFFEwPOcw7SlKhYiHIQ/+asg3v9n52onAIkzSyOFbMCddeI4Ows0DRtYBkdOIPy+HicdbGdthYcnmX8zclHdvvJgOhYNjuO08LwIzjDtIl9AscuENDgBXpDE7B7dp7s+UozQyMRtaoaQ7CSGIfkoPoSzkids5u2Qa/MrwGFrBE//d197szX5C5YOcXoFy3EmeatRfknO/n0bjGSPMTTGZvn701Fmr4TFW5bd1Xl9RBOdJyoqiSsBiaI1N2Vma9SunLbW6e0xPAk7c3nAkTiegwQT/5mKxb8i4eEwAIZ8oefjakeiDu8y3q0xrpsvs9mOOUctrXHBRkOtuivd/XeuE9aBIuYQO7XoCgwxGKpB7zC82Mn1BFSdfc6oe9DbsUZV0FZDoiOqiV+alreYitrrU51sa8f71BjMIaAXRdEVRhm+IWIviNcYY9bolO7v2g7l9C1V43oSlzoF8dzMJCYNVJAAUDMjqXLoidBs7BL6BukZbHToZ44hVr+PmF6b3Atoa+XblLCoOdBVQTp1vp0ZmyFZv3iduG2uf2NuqbcTOmF4Ld6yQDuHgq9Mx4poEwSBvua4KVYGjVAxuV+0PS+ftjNdAwfNT+9rBEW1DcS5gHb2kl5fchixl1IfLLFsGZ1uBmDOY05CXQgpzZl7US9zf3OngLGq0cXAX9OqCe6DVKlR3Iv5TFusFjvKeXnjRROsa+ly7JZI98DZX5T9VzcpTC12b7+zYw5jxVhrMbxTEqVvpM1GkJENP8g2wcbsAhUm1jP+MjfTD3ou20P8uFOeRXvBI+2gfStTcUJ9HzVtl7lWL1gfwMb21aRGU53KaM724WMPrSdnt7BW1GqLpUhJmwo3k7XY/OIzsMgmqFbL5u+hpBvangoWdQEaNO8gnG+z7gETZRm6j11hv07lRzQIQ/bY6/0gqAJt4rxUr9c7LJucajoHt9EMpvKJ/J8EwvUhBrTJEe93qzO2TL9p1j89Dhur1IbiUcZMRIruse9CWozjlK5G868Bvj+wqREgvGWeqHd3ygYHIhZQ9MwxiUreex0wW0+Qo85j26uks6PaDyClWmxD+LcYKLNu/QKK0IjpfyKXC6PAZADN5Cx3haDJEi2YWgPEcJjaN8noMal8fuvzGz0PKumdG+ZF/bexHSVKPgc2MDVFsxss9K0tgNjEZysZU/jzPk0VyUOOgUk+B7juLZpqPnDVQ7gsGuJ0c7vxrNS3EW4WsFVevp9tSoKA+MYEzay8=';const _IH='511270fabef7fd68bc68a249292f3f03ac8d0dbdd6bb756466caf3db170f41a1';let _src;

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
