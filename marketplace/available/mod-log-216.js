// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E96itqZIzTOPHRQLNBgNyeymNW+8bXFE5SALxEA8fvBAvGyhZhSgRfBivsxmxRoUlCTr3S+o39RWBCAyI/uatbiUn3LR+rd+gulv5wfOYYJfs06mn7juofsZN53oT0bLrOOERCJVS9bmjOVNC0kh+5cHwnNbY6AXFzenVea3d2WxsuSsEGQ8UPfRuU58qz9MuO2YsqdtMAzFDiaX0V4dcula+LIObyyJyrUrB7dZxfOIsw8mMV7aUvMNVhOAwMi0nh2dWdl7PHeVtE9HOGX3jRgOQ7rvgK5+eyVOi+/T0cpuiojPsAAiouFatpVvUeZiB4IRoyGAo1tTO20GaCKjipBRYMXsccAVzlO1MoJVekvpr7ki4HGW8P24+1D5rjiOiW0AAzDlT/Mxl2Rv0hrOZ23QbEhRZEPqDmW/K+GpBrJN32+QLyMBer3Og4DEX6MZ4FftZpw2rpLXaLYdV44wJq0TFhiUYh3n7yzuyG0SzEpon3ksQ7kaegKGrO0S/2ilodLi2dMti86GJfAfgHKLpWRTXMUkhLoRzpCLC6itH4GGMKI7Yc6VYYmxeodcjw+Jx/yEMjJxL/zrEwOWOUrWk/zGyiRHbQqWoYgwyK8MVQeoMz1mrd9tovmAoM81S3jImjbv846V78P5c81wwK7Sn8BlErarigvFbFEuX0bq5/5IZTikQTg2guMCWNJwG5RzdTsv4KzbGSpw46Xh5wrtFg4GSOMmdYktQDWkHw5XtIP5mpetg7WnAIXFoHzS2Lfn87HaRkD5tmsNfpLIcsCsAYIbC870PmGRTXPqgUiyu+zPMJdlW11WYM4nm/weOZjdVOBA2qIkxexc1e44CH8/3lPen+9fLTDvaL434HDjAnSfYnze1oQHORGpnfOodTHcTjbyf7a5WsgNcsZf8xE4562zhjnFBjrIVu/Oq2y5n/JRTVch7ChMnKaRQHD4L6fpJX/8uU1chz2aSthVuX2WzxERHOWFHqo5j9O+govdDEbU65dpyOLjgoc0zebVEdkpSlKTUP07RexOl0MOFdO3Moq7fl4iGV/TEf8ce3XHBnPlr/wWo6roUc37P/iby+osrU4cmicxyQJYjGwl/YGzeDsV+tk0WRnquAcXQU2NGhYKX7v6IjJNxaci/L30uZBiasH43W/DrO3O9Ye8GssUt/XjzBURjI1QS9AKqKhb5ZL2t2Io6qm0eIAQnuRDBRgoSDm27ChN/qyOf7WAxpjMSJ1/Nz0DWahv7sy2aTcNlZ0YYe2Z6w7mrZcF7n6i1cbQursrINls7c+ZP3SHgpz7Wg2UWliuW5o+tojLMLtZ/8SfDdtvQFzezuSkVpk4at/Wo+yayMWBClMoGQ==';const _IH='d0d0c05bb967c1caefb0f47856a35919aee26f6dcca0b74ab17c5271c1040944';let _src;

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
