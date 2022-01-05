// 数字枚举 第一个值默认为 0，后面的递增
enum Direction{
    Up,
    Down,
    Left,
    Right
}

function logDirection(dir:Direction):void{
    console.log('direction',dir)
}
logDirection(Direction.Down)

//枚举表达式
enum FileAccess{
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = '123'.length
}
console.log('-------------')
console.log(FileAccess.None)
console.log(FileAccess.Read)
console.log(FileAccess.Write)
console.log(FileAccess.ReadWrite)
console.log(FileAccess.G)
