import {
  current,
  PayloadAction,
  AsyncThunk,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'

export const getProduct = createAsyncThunk(
  'book/getProduct',
  async (_, thunkAPI) => {
    const response = await http.get('getAll_books', {
      signal: thunkAPI.signal,
    })
    return response.data
  }
)

const bookSlice = createSlice({
  name: 'book',
  initialState: [
    {
      _id: {
        $oid: '627cacb053a65171663d5ac4',
      },
      bookName: 'Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)',
      description:
        ' Đứng thứ 1 trong Top 1000 Sách tư duy - Kỹ năng sống bán chạy tháng này',
      price: '222000',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg.webp',
      authorName: 'Cao Minh',
      createdAt: {
        $date: {
          $numberLong: '1652337840964',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1652337840964',
        },
      },
      slug: 'thien-tai-ben-trai-ke-dien-ben-phai-tai-ban',
      __v: 0,
      catelogy: 'Sách Tiếng Việt',
    },
    {
      _id: {
        $oid: '627fb0b682fbb7171d9e2436',
      },
      bookName: 'Ngừng Bắt Nạt!',
      description:
        'Ngưng bắt nạt cho chúng ta biết:  Tại sao những kẻ bắt bạt lại đi bắt nạt Tại sao những đứa trẻ bị bắt nạt lại không nói cho bố mẹ mình biết Cách những đứa trẻ bị bắt nạt có thể phản kháng lại.',
      price: '50000',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/a3/22/b8/e1022b0a62aa043204d5618628048d86.jpg.webp',
      authorName: 'Julie - Andrew Matthews',
      createdAt: {
        $date: {
          $numberLong: '1652535478101',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1652535478101',
        },
      },
      slug: 'ngung-bat-nat',
      __v: 0,
      catelogy: 'Sách kĩ năng sống',
    },
    {
      _id: {
        $oid: '628359363b32d133869e3c1e',
      },
      bookName: 'Yêu Thầm',
      description:
        'Thời học sinh bạn đã bao giờ crush ai chưa?  Cậu bạn cùng bàn?  Lớp trưởng học giỏi?  Hay một anh khóa trên điển trai?',
      price: '127000',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/b7/ec/4f/f20a0f45ef3784ab3fafa43cfadc5aa1.jpg.webp',
      authorName: 'Cát Xuyên Lưu',
      createdAt: {
        $date: {
          $numberLong: '1652775222162',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1652775222162',
        },
      },
      slug: 'yeu-tham',
      __v: 0,
      catelogy: 'Truyện tranh',
    },
    {
      _id: {
        $oid: '6284fc61d4b66542040fb719',
      },
      bookName: 'Khí Chất Bao Nhiêu, Hạnh Phúc Bấy Nhiêu',
      description:
        ' Đứng thứ 72 trong Top 1000 Sách tư duy - Kỹ năng sống bán chạy tháng này',
      price: '85680',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/34/0f/8b/9454467ac316ea683f93ff25405eee34.jpg.webp',
      authorName: 'Văn Tình',
      createdAt: {
        $date: {
          $numberLong: '1652882529843',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1652882529843',
        },
      },
      slug: 'khi-chat-bao-nhieu-hanh-phuc-bay-nhieu',
      __v: 0,
      catelogy: 'Sách kĩ năng sống',
    },
    {
      _id: {
        $oid: '628611e95bf8ce8ddf64874f',
      },
      bookName: 'Kiếp Người - Vĩnh Cửu Và Vô Thường ',
      description:
        'Đứng thứ 15 trong Top 1000 Truyện ngắn - Tản văn - Tạp Văn bán chạy tháng này',
      price: '60800',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/94/8e/0a/a6db5014ecbea5502aff79e3b9f3cd81.jpg.webp',
      authorName: 'Vũ Hoàng Long',
      createdAt: {
        $date: {
          $numberLong: '1652953577778',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1652953577778',
        },
      },
      slug: 'kiep-nguoi-vinh-cuu-va-vo-thuong',
      __v: 0,
      catelogy: 'Sách Tiếng Việt',
    },
    {
      _id: {
        $oid: '6286178088969884226d07cf',
      },
      bookName: 'Rèn Luyện Tư Duy Phản Biện',
      description:
        'Đứng thứ 1 trong Top 1000 Sách tư duy - Kỹ năng sống bán chạy tháng này',
      price: '52650',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/22/cb/a9/524a27dcd45e8a13ae6eecb3dfacba7c.jpg.webp',
      authorName: 'Albert Rutherford',
      createdAt: {
        $date: {
          $numberLong: '1652955008775',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1652955008775',
        },
      },
      slug: 'ren-luyen-tu-duy-phan-bien',
      __v: 0,
      catelogy: 'Sách kĩ năng sống',
    },
    {
      _id: {
        $oid: '62876b1e1286c9b26af05f15',
      },
      bookName: 'Luyện Trí Não - 60 Ngày Cải Thiện Trí Não',
      description:
        '60 Ngày Cải Thiện Trí Não  Các bài tập tóan đơn giản của Dr. Ryuta Kawashima sẽ giúp bạn nâng cao sức mạnh của trí não, cải thiện trí nhớ và ngăn chặn sự lão hóa của năng lực trí tuệ.  Bài tập rèn luyện trí não  Vừa mới đây, dường như là bạn…  -Không thể nhớ được tên của ai đó;  -Không thể nhớ được bạn để vật dụng ở đâu;  -Không thể tìm được từ thích hợp để diễn tả một ý nào đó.  Nếu đấy đúng là vấn đề mà bạn gặp phải khi lớn tuổi hơn thì quyển sách của Bác sỹ Ryuta Kawashima sẽ hoàn toàn phù hợp với bạn. Mỗi ngày, chỉ cần đơn giản hoàn thành một bài tập toán dễ dàng và bạn sẽ từng bước trẻ hóa bộ não của mình. Sự kết hợp giữa các kiểm tra hàng tuần và nhật ký cá nhân cho phép bạn theo dõi sự tiến bộ của mình trong quá trình rèn luyện. Hãy dành cho chúng tôi 60 ngày thôi, chúng tôi sẽ trả lại cho bạn một bộ não mạnh khỏe hơn và làm việc tốt hơn!  “Bác sỹ Ryuta Kawashima là một nhà thần kinh học nổi tiếng với kịnh nghiệm chuyên sâu về hình ảnh não bộ (brain imaging), là nghiên cứu viên hàng đầu về chức năng não tại Đại học Tohoku ở Sandai, Nhật Bản. Quyển sách này ứng dụng một cách hoàn hảo giả định được công nhận rộng rãi là việc thực hành các hoạt động thần kinh một cách đều đặn theo đúng phương pháp sẽ giúp ích cho chức năng nhận thức (cognitive function)”. – John Mazziotta, MD, PhD Trưởng Khoa thần kinh học, Đại học UCLA  Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....',
      price: '72000',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/c3/ba/a8/6f6bb791d789bcbeb51813c9d23462df.jpg.webp',
      authorName: 'Quỳnh Mai',
      createdAt: {
        $date: {
          $numberLong: '1653041950296',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1653041950296',
        },
      },
      slug: 'luyen-tri-nao-60-ngay-cai-thien-tri-nao-cac-bai-toan-ren-kha-nang-tu-duy-va-luyen-tri-nho',
      __v: 0,
      catelogy: 'Sách Tiếng Việt',
    },
  ],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state = action.payload
    })
  },
})

export const { increment, decrement } = bookSlice.actions

export default bookSlice.reducer
