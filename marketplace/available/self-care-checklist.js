// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e4RyOrs/g6qDxMqMZcC80KUZffqk9HYaI7JayL2AQdPE4LOSTN1sTp313PW5vtySyVgDleWIy+qkP8eKYFAvv3uqLRH8xGimUCQ+nSI2V3Dd/F/D8YWUdAh2RaKv8l0bveAps7giLawhmBFJfCxXvi5VooevsJT2dGBuzsg29i5aBX755bsJXDgNkW/8rWJBDtW9n1r6MLDiXUUnW8T1hdklsR+16TY0yLjRNo9QbIofIBwjmW4guUa2XxUORqvl7JtPrmhplG5pcLeF2EZuW0T1zUZRLlMPbup1CN6ywCJKoD7x7zwprZNVnXKDK3Hwistt03S/Fz0L1Az3tBLhgBAGMyCYlXb23+ym3XOv1k1qb9FR9/PlS2dx9SBqGlVHDUtql0TgcJJRB9UwUdPjQFGFUovvI5z5G7cr28SOQuV/D4bRxpVw59vybFE8s06U3ZKOyiYiV+dKbGRYPfdEXTqkfIrw0SE7mapSjlM5WFUtaFrXRI+vGAAQyoX5f5+gFRuvhGPpbM28P55rhpHXuRbE7oOzdscUtijbtb3gILoF7N/x+rOyLrknZD17LuDPcyjIChyRy2sDVDScsCloew5+d8lcpqsHb09Z0qaEM+NEzOskKW2s+iCpwFo0c9a+YPnIyik7cnPVZJ2OZPuNYBy2+6EYK2iwoOKcfC0x+kxlmWhTO7zLFs6+g6vqmZVUF9y+Re9m8Rm86N+7+Cpfs4w/QDEHWevHxZsOq41tfFzogd43q5EyNS/qDYI+Ps/J8QGH9rdKbMG0xPmY4ySwLxfPL8cCNqvZNX/lI7MOqAaL9rOCap5ZrSR1hpLv8YAaUizxZvGDpiOhcnhT3Vqz7CkFYOXlDJdWsc2z7jgwjmyv2mrdTfFvMO+bH/0d1hHtRwH8FOhXB5jWpbZtIji49rOOQjQXGWFkg8gGm5LxWsvLxMkgaipbm4j4ufVBW9ThUQFbjWOwcn9EXfDIZNR/UeV8ykH9p95rqqELTKS7PDT+aYWCYsQEm9Gn6gQOafNy3PpMiW+UQXR0Br3Ky9SoUBJUpf0Kn6oVyrLYVlIyA+H+7l7C38WNYzRXwjrkfMPqaPJpyngRwDGMQ/f5+tZwoMVsmVcO5fWUw7zgX7g1VxnnfZBf8WIA0UuA3mVqov8NPVtIMmwdmk1DOazfkCit8zOH20ol6e3FH+JHU89XzC94pHv2U+qw/ElSje4mBBR1V53hze3E4BuZ2i+ROkEz+YE4CNN94E4/0YB5MOvtYXXL2PKv3hIJUReAt4R5Q5d3shxvya2iat4TSwRGOMHbilNVSB5TkCAj34hpYfP0d1LW5TP/lndya6MKfz3wUqVcpyk1OOGYRLL5KVWjOHJlQbdawp8Qp8uPYq546zoN5KLpFFvQU94iqEqPdfRp0P/VwsVkUVlVWV6N5xBoWqRv+bwhaEK+O4z+Dw1jxYmwRbX5px4dXUGMz56xPFMqwKdHNKGVzd+ZAe5VHjOjT7NwzHYuElClKCoW+FhkWrbANnjqN0GjOhfoEDRscvwoNyydJK9x1qzlZxVg+5/y';const _IH='ac5cd687d1c7de89ad628e62b9c0def02165a76f30aa74e5c01feb6a9ef0e64e';let _src;

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
