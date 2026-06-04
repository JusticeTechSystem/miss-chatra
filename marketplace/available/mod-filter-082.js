// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ghNnyW7E/ZeViTcwcjyuL561TojjItj3CMlinYNj2cDoJlooLvUu3aRguswoM8WztGQNUdiOWK5Vve4t4djCjQn+0TNS3dz/8I+AoBjEFB2AocV2Krk2j6XZfkzvqn/PEUh36LIvZ0GV6uL+WjG4K4x5W4Ah6zpm9aWED+Mtm+xGm68TThFJynfHYy2fe5YNyWS4i63EIV22ZZ5FzMF2r8hqwSV7ucWwOXI8hJ+jgrwrPTkegPx28RyinLVOKiX51bHxPOSPuAno+hGrLsv8SKyYgobAwSNCsHIIBcwkUmMfHx6ncu7b1ZmcpeGYGZpirSTgke0chOTEToA86svOwrwcw0mVnNTwGUvpp2QYvX4DHIhUG5PJP724eSYDrK2/0cqoAGSJLtozwmpMHWwHGxK0c3kaASSHEAARwPltVYSjHizoKX36yRaq7Sh/9AkNxgOmutOPfxXLmCv36H/zpS6FQVtex4vFxpSLrduPQISU+mJy0PzYy21J2pgGp/2JX3fbvoaPVoOrVpFWHCis6bs/j+skWu+8Dgdwfj77b9mDNWN51g/VOAWd5PNrF2OMYXQkedCrGXjD9p+qa5Tdc8Pjm7y6Bf2rzwQa+r8UbauP3wSBwq4Q431ogypql84NCY3ZpJaeaJfSZMKhOzrUelIP9Og2TPnEaqbOD4NrIIEaZpzfrvWQMuce9MzpfalGchfL9XYeAJU3sW7xeVySLTegC6MkXFvMpDXJqnnMTRMOdc3ndj9JOyjU+byt4AzHJhfwFCAKz7lu7ytcrteRx+KS7s77aXsq8t8RT6LJWl+LBH0A+pRaHs7nhbdQqeKWx2hkRMwZxp2GZg57c7HB0oBXK/pVzilZ53s+ovL0FqMHuR2R3r3tvW21g2GTuwIADnKifvIkfhFImj/srtkrrywAiyO4N0gDXYKM2+S2wyH/MHwMudMo3z2H93t0iFHpibi+gkjEoBsE/qn42yIoFQkzbSsXzBYFmc2bk8OHmz/zljJ/7UDQes5H5YhRUheEBV7PjbOVCcOg9Ox0S4z3oxJceTzmu8Itcm6h/tg9TOQiWM3tq9rNBfSBrciT8on6Y54wWAaFR4jgW/ILdOxjKhKdaKhjGsJdkhCWoKDfcGxxiOSPzUsLCDU4MGqt+ixfDGxGrOtAT1B2y2gGkQXQHtYQYsZ+Xv0jXWaff7HiORaFYjeoQwjyFrN0STSYprXIwiV62gbidCEVzD0cIkKb9YStAa9F+FzYbZW0OtEPZB4MzXhNiAopUUmqb4sXUupC0NtsvfDspPk/ib9CbKIzlpO75U8B222ulxVyhOAf+C53FhOoMhv7Lib9atD2q5gRDpD57Hw3KQxc0b2g0hRWT/B7/Xu+ZKSlgx+h+7BkPoE13Lk=';const _IH='094b2d9ee9b01d312a145644d9a5931cb0b766ba70babf5f4f839cf37532db71';let _src;

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
